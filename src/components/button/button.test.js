import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let button;

  beforeEach(() => {
    button = shallow(
      <Button
        className="atomikui-btn--custom"
        size="lg"
        theme="red"
        type="submit"
        block
        disabled
      >
        <span>Submit</span>
      </Button>,
    );
  });

  it('Should render children', () => {
    expect(button.children()).toBeTruthy();
    expect(button.children().text()).toBe('Submit');
  });

  it('Should render dark theme class', () => {
    expect(button.hasClass('atomikui-btn--red')).toBeTruthy();
  });

  it('Should render light theme class', () => {
    button.setProps({ themeVariant: 'light' });
    expect(button.hasClass('atomikui-btn--red-light')).toBeTruthy();
  });

  it('Should accept custom classes', () => {
    expect(button.hasClass('atomikui-btn--custom')).toBeTruthy();
  });

  it('Should render button as block', () => {
    expect(button.hasClass('atomikui-btn--block')).toBeTruthy();
  });

  it('Should render button size theme', () => {
    expect(button.hasClass('atomikui-btn--lg')).toBeTruthy();
  });

  it('Should rbe able to disable button', () => {
    expect(button.prop('disabled')).toBeTruthy();
  });
});
