/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import FormField from './FormField';

configure({ adapter: new Adapter() });

describe('<FormField />', () => {
  let formField;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    formField = mount(
      <FormField label="Phone Number" onChange={onChangeSpy} />,
    );
  });

  it('Should render without errors', () => {
    expect(formField.length).toBe(1);
  });

  it('Should render form field based on the type', () => {
    formField.setProps({ type: 'radio' });

    expect(formField.find('input').prop('type')).toBe('text');

    formField.setProps({ type: 'textarea' });

    expect(formField.find('textarea').length).toBe(1);
  });

  it('Should trigger onChange callback when form field value changes', () => {
    formField.find('input').simulate('change', { target: { value: 'test' } });

    expect(onChangeSpy.called).toBe(true);
  });

  it('Should render help hint with text', () => {
    formField.setProps({ helpText: 'Help text' });

    expect(formField.find('.hint').length).toBe(1);
    expect(formField.find('.hint').text()).toBe('Help text');
  });

  it('Should render error class', () => {
    formField.setProps({ hasError: true });

    expect(formField.find('.formfield').hasClass('has-error')).toBe(true);
  });

  it('Should render error hint with text', () => {
    formField.setProps({ errorText: 'Error text', hasError: true });

    expect(formField.find('.hint--error').length).toBe(1);
    expect(formField.find('.hint--error').text()).toBe('Error text');
  });

  it('Should not render a label', () => {
    expect(formField.find('.formfield__label').length).toBe(1);
    expect(formField.find('.formfield__label').text()).toBe('Phone Number');
  });

  it('Should not render lable if `labelless prop is set to true`', () => {
    formField.setProps({ labelless: true });

    expect(formField.find('.formfield__label').length).toBe(0);
  });
});
