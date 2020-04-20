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

    expect(formField.find('.rcl-hint').length).toBe(1);
    expect(formField.find('.rcl-hint').text()).toBe('Help text');
  });

  it('Should render error class', () => {
    formField.setProps({ hasError: true });

    expect(formField.find('.rcl-formfield').hasClass('has-error')).toBe(true);
  });

  it('Should render error hint with text', () => {
    formField.setProps({ errorText: 'Error text', hasError: true });

    expect(formField.find('Hint').length).toBe(1);
    expect(formField.find('Hint').text()).toBe('Error text');
  });

  it('Should not render a label if label is null', () => {
    formField.setProps({ label: null });
    expect(formField.find('.rcl-formfield__label').length).toBe(0);
  });
});
