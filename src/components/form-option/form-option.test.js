import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import FormOption from './FormOption';

configure({ adapter: new Adapter() });

describe('<FormOption />', () => {
  let formOption;
  let formOptionSpy;

  beforeEach(() => {
    formOptionSpy = sinon.spy();

    formOption = mount(
      <FormOption
        label="I agree to the terms and conditions"
        onChange={formOptionSpy}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(formOption.length).toBe(1);
  });

  it('Should render checkbox by default', () => {
    formOption.setProps({ type: 'text' });

    expect(formOption.find('input').prop('type')).toBe('checkbox');
  });

  it('Should render radio button', () => {
    formOption.setProps({ type: 'radio' });

    expect(formOption.find('input').prop('type')).toBe('radio');
  });

  it('Should set name attribute based of ID if no name prop is not set', () => {
    expect(formOption.find('input').prop('name').match(/uid-/)).not.toBeNull();
  });

  it('Should trigger onChange callback', () => {
    formOption.find('input').simulate('change', { checked: true });

    expect(formOptionSpy.called).toBe(true);
  });

  it('Should handle an error', () => {
    formOption.setProps({
      hasError: true,
      errorText: 'This field is required',
    });

    expect(formOption.find('label.rcl-form-option').hasClass('has-error')).toBe(
      true,
    );
    expect(formOption.find('Hint').length).toBe(1);
    expect(formOption.find('Hint').text()).toBe('This field is required');
  });

  it('Should render a hint', () => {
    formOption.setProps({ helpText: 'Some helpful text' });

    expect(formOption.find('Hint').length).toBe(1);
    expect(formOption.find('Hint').text()).toBe('Some helpful text');
  });

  it('Should display an Icon if checked', () => {
    formOption.setProps({ checked: true });

    expect(formOption.find('.rcl-form-option__icon').find('svg').length).toBe(
      1,
    );
  });
});
