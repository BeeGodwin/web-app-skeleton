import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import App from '../../../src/app/App';

const sandbox = sinon.createSandbox();

describe('App component', () => {

  afterEach(() => sandbox.restore());

  it('renders an h1', () => {
    const wrapper = mount(<App />);
    const node = wrapper.find('h1');
    expect(node).to.exist;
  });
});