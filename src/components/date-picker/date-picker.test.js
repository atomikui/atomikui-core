/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import DatePicker from './DatePicker';

configure({ adapter: new Adapter() });

describe('<DatePicker />', () => {
  let datepicker;
  const originalValue = '04/08/2020';

  beforeEach(() => {
    datepicker = mount(
      <DatePicker
        label="Select a Date"
        helpText="Expected Format: MM/DD/YYYY"
        onChange={(date) => {}}
        value={originalValue}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(datepicker.length).toBe(1);
  });

  it('Should open calendar', () => {
    datepicker.find('.date-picker__input__btn').simulate('click');

    expect(datepicker.find('.date-picker__calendar').hasClass('is-open')).toBe(
      true,
    );
  });

  it('Should close calendar when on escape press', () => {
    datepicker.find('.date-picker__input__btn').simulate('click');

    datepicker
      .find('.react-calendar__tile')
      .first()
      .simulate('keydown', { key: 'Escape', keyCode: 27, which: 27 });

    expect(datepicker.find('.date-picker__calendar').hasClass('is-open')).toBe(
      false,
    );
  });
});
