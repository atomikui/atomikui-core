/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import FormField from './FormField';

configure({ adapter: new Adapter() });

describe('<FormField />', () => {
  let formField;
  const onChangeSpy = sinon.spy();

  beforeEach(() => {
    formField = shallow(<FormField onChange={onChangeSpy} />);
  });

  it('Should render without errors', () => {
    expect(formField.length).toBe(1);
  });

  it('Should render form field based on the type', () => {
    expect(formField.find('input').prop('type')).toBe('text');
  });

  it('Should trigger onChange callback when form field value changes', () => {
    formField.find('input').simulate('change', { target: { value: 'test' } });

    expect(onChangeSpy.called).toBe(true);
  });
});
