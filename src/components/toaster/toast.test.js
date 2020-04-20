/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Toast from './Toast';

configure({ adapter: new Adapter() });

describe('<Toast />', () => {
  let toast;

  beforeEach(() => {
    toast = shallow(<Toast children="toast message" />);
  });

  it('Should render without errors', () => {
    expect(toast.length).toBe(1);
  });

  it('Should render content', () => {
    const content = toast.find('Alert').children().text();
    expect(content).toBe('toast message');
  });
});
