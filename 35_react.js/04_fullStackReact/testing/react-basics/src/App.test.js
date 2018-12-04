/* leave first line blank for cq */
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let button;
  let input;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );

    button = wrapper.find('button').first();
    input = wrapper.find('input').first();
  });

  it('should have the `th` "Items"', () => {
    expect(wrapper.contains(<th>Items</th>)).toBe(true);
  });

  it('should have a `button` element', () => {
    expect(wrapper.containsMatchingElement(<button>Add item</button>)).toBe(true);
  });

  it('should have an `input` element', () => {
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });

  it('`button` should be disabled', () => {
    expect(button.props().disabled).toBe(true);
  });

  describe('the user populates the input', () => {
    const item = 'Vancouver';

    beforeEach(() => {
      const simulatedEvent = {
        target: {
          value: item
        }
      };
      input.simulate('change', simulatedEvent);
    });

    it('should update the state property `item`', () => {
      // state only available on wrapper element, which is the component itself
      const state = wrapper.state();
      expect(state.item).toBe(item);
    });

    it('should enable `button`', () => {
      // props hash is available on every wrapper element node
      const button = wrapper.find('button').first();
      const props = button.props();
      expect(props.disabled).toBe(false);
    });

    describe('and then clears the input', () => {

      // empty input
      beforeEach(() => {
        const simulatedEvent = {
          target: {
            value: ''
          }
        };
        input.simulate('change', simulatedEvent);
      });

      it('should update the state property `item` to empty', () => {
        const state = wrapper.state();
        expect(state.item).toBe('');
      });

      it('should disable `button`', () => {
        const props = button.props();
        expect(props.disabled).toBe(true);
      });
    });

    describe('and then submits the form', () => {

      beforeEach(() => {
        const form = wrapper.find('form').first();
        const simulatedEvent = {};
        simulatedEvent.preventDefault = () => {};
        form.simulate('submit', simulatedEvent);
      });

      it('should add the item to state', () => {
        const state = wrapper.state();
        // verify state has item added
        expect(state.items.includes(item)).toBe(true);
        expect(state.items).toContain(item); // use jest matcher
      });

      it('should render the item in the table', () => {
        expect(wrapper.containsMatchingElement(<td>{item}</td>)).toBe(true);
      });

      it('should clear the input field', () => {
        expect(input.props().value).toBe('');
        expect(wrapper.state().item).toBe('');
      });

      it('should disable `button`', () => {
        expect(button.props().disabled).toBe(true);
      });
    });
  });
});
