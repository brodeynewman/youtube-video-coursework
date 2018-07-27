import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App, { App as AppComponent } from '../../src/App';

describe('App', () => {
  it('handleInputChange should update state.inputValue', () => {
    const wrapper = shallow(<AppComponent />).instance();

    wrapper.handleInputChange({ target: { value: 'Hello YouTube' } });
    
    expect(wrapper.state.inputValue).toBe('Hello YouTube');
  });

  it('handleAddTodo should add a todo', () => {
    const wrapper = shallow(<AppComponent />).instance();
    const preventDefaultSpy = jest.fn();

    expect(wrapper.state.todoItems.length).toBe(1);

    wrapper.handleInputChange({ target: { value: 'Hello YouTube' } });
    expect(wrapper.state.inputValue).toBe('Hello YouTube');

    wrapper.handleAddTodo({ preventDefault: preventDefaultSpy });

    expect(wrapper.state.todoItems.length).toBe(2);
    expect(preventDefaultSpy.mock.calls.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<AppComponent />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
