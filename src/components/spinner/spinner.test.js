/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
  let spinner;
  const sizes = ['sm', 'md', 'lg', 'xlg'];
  const colors = [
    ['default', '#333'],
    ['red', '#D0191F'],
    ['orange', '#ff8400'],
    ['green', '#4fa009'],
    ['blue', '#027abf'],
  ];

  beforeEach(() => {
    spinner = mount(<Spinner />);
  });

  it('Should render without errors', () => {
    expect(spinner.length).toBe(1);
  });

  test.each(sizes)('Should set the size modifier .spinner--%p', (size) => {
    spinner.setProps({ size });
    expect(spinner.find('.spinner').hasClass(`spinner--${size}`)).toBe(true);
  });

  test.each(colors)(
    'If color prop is %p it should set spinner svg stroke to %p',
    (color, stroke) => {
      spinner.setProps({ color });
      expect(spinner.find('svg > circle').prop('stroke')).toBe(stroke);
    },
  );
});
