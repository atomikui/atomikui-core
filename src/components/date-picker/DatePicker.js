import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import FormField from '../form-field';
import 'react-calendar/dist/Calendar.css';

const DatePicker = ({ classes, onChange, onDateChange, ...props }) => {
  const handleDateChange = () => {};

  return (
    <div className={classnames('component-class', classes, {})}>
      <FormField onChange={onChange} {...props} />
      <Calendar onChange={handleDateChange} className="date-picker__calendar" />
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
};

DatePicker.defaultProps = {
  classes: '',
  onChange() {},
  onDateChange() {},
};

export default DatePicker;
