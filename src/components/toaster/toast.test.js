/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Toast from './Toast';

configure({ adapter: new Adapter() });

describe('<Toast />', () => {
  let toast;

  beforeEach(() => {
    toast = mount(<Toast children="toast message" />);
  });

  it('Should render without errors', () => {
    expect(toast.length).toBe(1);
  });

  it('Should render content', () => {
    const content = toast.find('.alert__body').text();
    expect(content).toBe('toast message');
  });
});
