/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import DatePicker from './DatePicker';

configure({ adapter: new Adapter() });

describe('<DatePicker />', () => {
  let datepicker;

  beforeEach(() => {
    datepicker = mount(
      <DatePicker
        label="Select a Date"
        helpText="Expected Format: MM/DD/YYYY"
        onChange={(date) => console.log(date)}
        value="04/08/2020"
      />,
    );
  });

  it('Should render without errors', () => {
    expect(datepicker.length).toBe(1);
  });
});
