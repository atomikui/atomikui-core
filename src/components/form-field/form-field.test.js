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

  it('Should render form field based on the type', () => {
    formField.setProps({ type: 'radio' });

    expect(formField.find('input').prop('type')).toBe('text');

    formField.setProps({ type: 'textarea' });

    expect(formField.find('textarea')).toBeTruthy();
  });

  it('Should trigger onChange callback when form field value changes', () => {
    formField.find('input').simulate('change', { target: { value: 'test' } });

    expect(onChangeSpy.called).toBeTruthy();
  });

  it('Should render help hint with text', () => {
    formField.setProps({ helpText: 'Help text' });

    expect(formField.find('Hint')).toBeTruthy();
    expect(formField.find('Hint').text()).toBe('Help text');
  });

  it('Should render error class', () => {
    formField.setProps({ hasError: true });

    expect(
      formField.find('[data-test-id="formfield"]').hasClass('has-error'),
    ).toBeTruthy();
  });

  it('Should render error hint with text', () => {
    formField.setProps({ errorText: 'Error text', hasError: true });

    expect(formField.find('Hint')).toBeTruthy();
    expect(formField.find('Hint').text()).toBe('Error text');
  });

  it('Should not render a label if label is null', () => {
    formField.setProps({ label: null });
    expect(formField.find('[formfield-label]')).toHaveLength(0);
  });
});
