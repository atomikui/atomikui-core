import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import DatePicker from './DatePicker';

configure({ adapter: new Adapter() });

describe('<DatePicker />', () => {
  let datepicker;
  const onChangeSpy = sinon.spy();
  const originalValue = '04/44/2020';

  beforeEach(() => {
    datepicker = mount(
      <DatePicker
        label="Select a Date"
        helpText="Expected Format: MM/DD/YYYY"
        onChange={onChangeSpy}
        value={originalValue}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(datepicker.length).toBe(1);
  });

  it('Should open calendar', () => {
    datepicker.find('button.rcl-date-picker__input__btn').simulate('click');

    expect(datepicker.find('Overlay').prop('isActive')).toBe(true);
  });

  it('Should close calendar', () => {
    datepicker.find('button.rcl-date-picker__input__btn').simulate('click');
    datepicker.find('.react-calendar__tile').at(15).simulate('click');

    expect(datepicker.find('Overlay').prop('isActive')).toBe(false);
  });

  it('Should change input value when calendar date is clicked', () => {
    datepicker.find('.react-calendar__tile').at(15).simulate('click');

    expect(
      datepicker.find('input.rcl-formfield__input').prop('value'),
    ).not.toBe(originalValue);
  });

  it('Should close calendar when on escape press', () => {
    datepicker.find('button.rcl-date-picker__input__btn').simulate('click');

    datepicker
      .find('.react-calendar__tile')
      .first()
      .simulate('keydown', { key: 'Escape', keyCode: 27, which: 27 });

    expect(
      datepicker.find('.rcl-date-picker__calendar').hasClass('is-open'),
    ).toBe(false);
  });

  it('Should handle an invalid date', () => {
    datepicker.setProps({ value: '05/33/1999' });
    expect(datepicker.find('input.rcl-formfield__input').prop('value')).toBe(
      '__/__/____',
    );
  });

  it('Should trigger onChange callback on blur with valid date', () => {
    datepicker
      .find('input.rcl-formfield__input')
      .simulate('blur', { target: { value: '05/22/2020' } });

    expect(onChangeSpy.withArgs('05/22/2020').called).toBe(true);
  });

  it('Should trigger onChange callback on blur with `Invalid Date`', () => {
    datepicker
      .find('input.rcl-formfield__input')
      .simulate('blur', { target: { value: '05/44/2020' } });

    expect(onChangeSpy.withArgs('Invalid Date').called).toBe(true);
  });
});
