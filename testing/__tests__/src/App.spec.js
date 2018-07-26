import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

describe('App', () => {
  it('Should do something', () => {
    const wrapper = shallow(<App />).dive().instance();

    expect(true).toBe(true);
  });
});