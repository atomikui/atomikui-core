import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
  let spinner;
  const sizes = ['sm', 'md', 'lg', 'xlg'];
  const themes = [
    ['default', '#333'],
    ['red', '#D0191F'],
    ['orange', '#ff8400'],
    ['green', '#4fa009'],
    ['blue', '#027abf'],
    ['white', '#fff'],
  ];

  beforeEach(() => {
    spinner = shallow(<Spinner />);
  });

  it('Should render without errors', () => {
    expect(spinner.length).toBe(1);
  });

  test.each(sizes)('Should set the size modifier .spinner--%p', (size) => {
    spinner.setProps({ size });
    expect(spinner.hasClass(`rcl-spinner--${size}`)).toBe(true);
  });

  test.each(themes)(
    'If color prop is %p it should set spinner svg stroke to %p',
    (theme, stroke) => {
      spinner.setProps({ theme });
      expect(spinner.find('svg > circle').prop('stroke')).toBe(stroke);
    },
  );
});
