// We populate this file in the chapter "Unit Testing"
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';

import FoodSearch from '../FoodSearch';
import Client from '../Client'; // import dependency module

jest.mock('../Client'); // init mock on required module


describe('FoodSearch', () => {
  let wrapper;
  let removeIcon;

  // create a mock function that can be passed as prop
  const mockOnFoodClickHandler = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <FoodSearch
        onFoodClick={mockOnFoodClickHandler}
      />
    );
  });

  afterEach(() => {
    // clean up residue mock calls
    Client.search.mockClear();
    mockOnFoodClickHandler.mockClear();
  });

  // ... initial state specs
  it('should not display the remove icon', () => {
    removeIcon = wrapper.find('.remove.icon');
    // by checking matching element length
    expect(removeIcon.length).toBe(0);
    // by checking if wrapper contains element
    expect(wrapper.containsMatchingElement(<i className='remove icon'/>)).toBe(false);
  });

  it('should display zero rows', () => {
    expect(wrapper.find('tbody > tr.foodDisplayRow').length).toBe(0);
    expect(wrapper.containsAnyMatchingElements(<tr className='foodDisplayRow'/>)).toBe(false);
  });

  describe('user populates search field', () => {
    const value = 'brocc';

    beforeEach(() => {
      // ... simulate user typing "brocc" in input
      const input = wrapper.find('input').first();
      const simulatedEvent = {
        target: { value }
      };
      // due to shallow element wrapper is not re-rendered when 'setState' is called
      // simulate will call 'wrapper.update()' automatically to force re-render
      input.simulate('change', simulatedEvent);
    });

    // ... specs
    it('should update state property `searchValue`', () => {
      const state = wrapper.state();
      expect(state.searchValue).toBe(value);
    });

    it('should display the remove icon', () => {
      removeIcon = wrapper.find('.remove.icon');
      expect(removeIcon.length).toBe(1);
      expect(wrapper.containsMatchingElement(<i className='remove icon'/>)).toBe(true);
    });

    it('should call `Client.search() with `value`', () => {
      const mockCalls = Client.search.mock.calls;
      expect(mockCalls.length).toBe(1);
      expect(mockCalls[0][0]).toBe(value);
    });

    describe('and API returns results', () => {
      const foods = [
        {
          description: 'Broccolini',
          kcal: '100',
          protein_g: '11',
          fat_g: '21',
          carbohydrate_g: '31',
        },
        {
          description: 'Broccoli rabe',
          kcal: '200',
          protein_g: '12',
          fat_g: '22',
          carbohydrate_g: '32',
        },
      ];

      beforeEach(() => {
        // ... simulate API returning results

        // get mocked callback function
        const mockCallback = Client.search.mock.calls[0][1];
        // trigger callback with mock data
        mockCallback(foods);
        // no simulate call here
        // so manually force re-render component, used when state is updated from outside
        // from the above mocked callback function
        wrapper.update();
      });

      // ... specs
      it('should set the state property `foods`', () => {
        const foodsState = wrapper.state().foods;
        expect(foodsState.length).toBe(2);
        expect(foodsState).toEqual(foods);
      });

      it('should display two rows', () => {
        const renderedFoodRows = wrapper.find('tbody > tr.foodDisplayRow');
        expect(renderedFoodRows.length).toBe(2);
      });

      it('should render the description of first food', () => {
        const renderedHtml = wrapper.html();
        const food1Desc = foods[0].description;
        expect(renderedHtml).toContain(food1Desc); // check if a string contains string
      });

      it('should render the description of second food', () => {
        const renderedHtml = wrapper.html();
        const food2Desc = foods[1].description;
        expect(renderedHtml).toContain(food2Desc);
        expect(renderedHtml.includes(food2Desc)).toBe(true);
      });

      describe('then user clicks food item', () => {
        beforeEach(() => {
          const foodRow = wrapper.find('tbody > tr.foodDisplayRow').first();
          foodRow.simulate('click');
        });

        it('should call prop `onFoodClick` with `food`', () => {
          const foodData = foods[0]; // we simulated clicking on the first food row
          expect(mockOnFoodClickHandler.mock.calls.length).toBe(1);
          expect(mockOnFoodClickHandler.mock.calls[0][0]).toBe(foodData); // verify actual param data
          expect(mockOnFoodClickHandler.mock.calls[0]).toEqual([foodData]); // verify param data by comparing args array, so use toEqual
        });
      });

      describe('then user types more', () => {
        const value = 'broccx';

        beforeEach(() => {
          // ... simulate user typing "x"
          const input = wrapper.find('input').first();
          const simulatedEvent = { target: { value } };
          input.simulate('change', simulatedEvent);
        });

        describe('and API returns no results', () => {
          beforeEach(() => {
            // ... simulate API returning no results
            const secondInvocationArgs = Client.search.mock.calls[1];
            const callbackFn = secondInvocationArgs[1];
            // trigger second time change callback with empty list
            callbackFn([]);
            wrapper.update();
          });

          // ... specs
          it('should set the state property `foods`', () => {
            expect(wrapper.state().foods).toEqual([]);
            expect(wrapper.state().foods.length).toBe(0);
          });
        });
      });
    });
  });

  describe('unit test actual react component methods', () => {
    let wrapperInstance;

    describe('`onSearchChange` method', () => {
      it('should update search term state', () => {
        // use instance method to get actual react component instance
        // so can do more explicit unit tests on it
        wrapperInstance = wrapper.instance();
        expect(wrapperInstance).toBeInstanceOf(FoodSearch);

        const inputValue = 'test value';

        // call instance method
        wrapperInstance.onSearchChange({
          target: {
            value: inputValue
          }
        });
        // verify state
        expect(wrapper.state().searchValue).toBe(inputValue);
      });
    });
  });
});
