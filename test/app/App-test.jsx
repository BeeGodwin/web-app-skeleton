import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/app/App';

describe('App component', () => {
  it('renders an h1', () => {
    const wrapper = mount(<App />);
    const node = wrapper.find('h1');
    expect(node).to.exist;
  });
});