import React from 'react'; // need this due to using JSX -> React.createElement()
import App from './App';

// using shallow renderer from enzyme instead of ReactDom renderer
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have the `th` "Items"', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.contains(<th>Items</th>)).toBe(true); // contains accepts ReactElement, so can use JSX
  });
});
