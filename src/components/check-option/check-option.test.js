import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import CheckOption from './CheckOption';

configure({ adapter: new Adapter() });

describe('<CheckOption />', () => {
  let checkOption;
  let checkOptionSpy;

  beforeEach(() => {
    checkOptionSpy = sinon.spy();

    checkOption = mount(
      <CheckOption
        label="I agree to the terms and conditions"
        onChange={checkOptionSpy}
      />,
    );
  });

  it('Should render checkbox by default', () => {
    checkOption.setProps({ type: 'text' });

    expect(checkOption.find('input').prop('type')).toBe('checkbox');
  });

  it('Should render radio button', () => {
    checkOption.setProps({ type: 'radio' });

    expect(checkOption.find('input').prop('type')).toBe('radio');
  });

  it('Should set name attribute based of ID if no name prop is not set', () => {
    expect(checkOption.find('input').prop('name')).not.toBeNull();
  });

  it('Should trigger onChange callback', () => {
    checkOption.find('input').simulate('change', { checked: true });

    expect(checkOptionSpy.called).toBe(true);
  });

  it('Should set as checked if defaultChecked is true', () => {
    checkOption.setProps({ defaultChecked: true });
    expect(checkOption.find('input').props().defaultChecked).toBe(true);
  });

  it('Should handle an error', () => {
    checkOption.setProps({
      hasError: true,
      errorText: 'This field is required',
    });

    expect(
      checkOption.find('label.atomikui-check-option').hasClass('has-error'),
    ).toBe(true);
    expect(checkOption.find('Hint')).toBeTruthy();
    expect(checkOption.find('Hint').text()).toBe('This field is required');
  });

  it('Should render a hint', () => {
    checkOption.setProps({ helpText: 'Some helpful text' });

    expect(checkOption.find('Hint')).toBeTruthy();
    expect(checkOption.find('Hint').text()).toBe('Some helpful text');
  });

  it('Should display an Icon if checked', () => {
    checkOption.setProps({ checked: true });

    expect(
      checkOption.find('.atomikui-check-option__icon').find('svg').length,
    ).toBe(1);
  });

  it('Should render dark theme', () => {
    checkOption.setProps({ theme: 'red' });
    expect(
      checkOption.find('Label').hasClass('atomikui-check-option--red'),
    ).toBe(true);
  });

  it('Should render light theme', () => {
    checkOption.setProps({ theme: 'red', themeVariant: 'light' });
    expect(
      checkOption.find('Label').hasClass('atomikui-check-option--red-light'),
    ).toBe(true);
  });
});
