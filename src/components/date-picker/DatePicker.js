import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import moment from 'moment';
import FormField from '../form-field';
import 'react-calendar/dist/Calendar.css';

const DatePicker = ({ classes, onChange, onDateChange, value, ...props }) => {
  const [theValue, setTheValue] = useState(value);

  const handleDateChange = (details) => {
    const date = moment(details).format('MM/DD/YYYY');
    setTheValue(date);
    onChange(date);
  };

  return (
    <div className={classnames('component-class', classes, {})}>
      <FormField onChange={onChange} value={theValue} {...props} />
      <Calendar onChange={(details) => handleDateChange(details)} />
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
