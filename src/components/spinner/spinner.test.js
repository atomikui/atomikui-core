import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
  let spinner;
  const sizes = ['sm', 'md', 'lg', 'xlg'];

  beforeEach(() => {
    spinner = shallow(<Spinner theme="red" />);
  });

  it('Should render without errors', () => {
    expect(spinner).toBeTruthy();
  });

  it('Should set a dark theme class', () => {
    expect(spinner.hasClass('atomikui-spinner--red')).toBe(true);
  });

  it('Should set a light theme class', () => {
    spinner.setProps({ themeVariant: 'light' });
    expect(spinner.hasClass('atomikui-spinner--red-light')).toBe(true);
  });

  test.each(sizes)('Should set the size modifier .spinner--%p', (size) => {
    spinner.setProps({ size });
    expect(spinner.hasClass(`atomikui-spinner--${size}`)).toBe(true);
  });
});
