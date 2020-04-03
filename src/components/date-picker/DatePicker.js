import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import moment from 'moment';
import FormField from '../form-field';
import Button from '../button';
import 'react-calendar/dist/Calendar.css';

// TODO: Creat a Calendar component utilizing the react-calendar module

const DatePicker = ({ classes, onChange, onDateChange, value, ...props }) => {
  const [theValue, setTheValue] = useState(value);

  const handleDateChange = (details) => {
    const date = moment(details).format('MM/DD/YYYY');
    setTheValue(date);
    onChange(date);
  };

  return (
    <div className={classnames('date-picker', classes, {})}>
      <FormField onChange={onChange} value={theValue} {...props} />
      <div className="date-picker__calendar">
        <Calendar onChange={(details) => handleDateChange(details)} />
        <div className="date-picker__calendar__btns">
          <Button size="md">Cancel</Button>
          <Button variant="primary" size="md">
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Triggers callback when date picker input value changes */
  onChange: PropTypes.func,
  /** Triggers callback when calendar date changes */
  onDateChange: PropTypes.func,
  /** The date picker input value */
  value: PropTypes.string,
};

DatePicker.defaultProps = {
  classes: '',
  onChange() {},
  onDateChange() {},
  value: '',
};

export default DatePicker;
