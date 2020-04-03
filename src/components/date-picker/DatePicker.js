import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import moment from 'moment';
import FormField from '../form-field';
import Button from '../button';
import 'react-calendar/dist/Calendar.css';

// TODO: Creat a Calendar component utilizing the react-calendar module

const DatePicker = ({
  classes,
  disabled,
  onChange,
  onDateChange,
  value,
  ...props
}) => {
  const [originalValue, setOriginalValue] = useState(value);
  const [theValue, setTheValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (details) => {
    const date = moment(details).format('MM/DD/YYYY');
    setTheValue(date);
  };

  const handleCalendarSubmit = () => {
    setOriginalValue(theValue);
    onChange(theValue);
    setIsOpen(false);
  };

  const handleCalendarCancel = () => {
    setTheValue(originalValue);
    setIsOpen(false);
  };

  return (
    <div className={classnames('date-picker', classes, {})}>
      <div className="date-picker__input">
        <FormField
          onChange={onChange}
          value={theValue}
          disabled={disabled}
          {...props}
        />
        <Button
          classes="date-picker__input__btn"
          variant="hollow"
          size="md"
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
        >
          Cancel
        </Button>
      </div>
      <div
        className={classnames('date-picker__calendar', {
          'is-open': isOpen,
        })}
      >
        <Calendar
          onChange={(details) => handleDateChange(details)}
          value={theValue ? new Date(theValue) : ''}
        />
        <div className="date-picker__calendar__btns">
          <Button size="md" onClick={() => handleCalendarCancel()}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={() => handleCalendarSubmit()}
          >
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
  /** Disables a date picker form field and calandar. */
  disabled: PropTypes.bool,
  /** Triggers callback when date picker input value changes */
  onChange: PropTypes.func,
  /** Triggers callback when calendar date changes */
  onDateChange: PropTypes.func,
  /** The date picker input value. Must be a Date(). */
  value: PropTypes.string,
};

DatePicker.defaultProps = {
  classes: '',
  disabled: false,
  onChange() {},
  onDateChange() {},
  value: '',
};

export default DatePicker;
