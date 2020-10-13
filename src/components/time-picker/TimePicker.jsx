/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Hint from '../hint';

const hoursOptions = [...Array(13).keys()].slice(1, 13).map((hour) => {
  return String(hour);
});

const minutesOptions = [...Array(60).keys()].map((minute) => {
  return minute < 10 ? `0${minute}` : String(minute);
});

const TimePicker = ({
  className,
  errorText,
  hasError,
  hour,
  minutes,
  label,
  meridiem,
  onChange,
  ...others
}) => {
  const [theHour, setTheHour] = useState(hour);
  const [theMinute, setTheMinute] = useState(minutes);
  const [theMeridiem, setTheMeridiem] = useState(meridiem);

  useEffect(() => {
    onChange({
      hour: theHour,
      minutes: theMinute,
      meridiem: theMeridiem,
      timeString: `${theHour}:${theMinute} ${theMeridiem}`,
    });
  }, [theHour, theMinute, theMeridiem]);

  return (
    <fieldset>
      <legend className="atomikui-label" style={{ marginBottom: '3px' }}>
        {label}
      </legend>
      <div
        className={classnames('atomikui-time-picker', className, {
          'has-error': hasError,
        })}
        {...others}
      >
        <select
          id="hour-dropdown"
          aria-label="select the hour of the day"
          aria-describedby="time-picker-error"
          value={theHour}
          onChange={(e) => {
            return setTheHour(e.target.value);
          }}
        >
          {hoursOptions.map((h) => {
            return (
              <option key={`hour-${h}`} value={h}>
                {h}
              </option>
            );
          })}
        </select>
        <span>:</span>
        <select
          id="minutes-dropdown"
          aria-label="select the minute of the hour"
          aria-describedby="time-picker-error"
          value={theMinute}
          onChange={(e) => {
            return setTheMinute(e.target.value);
          }}
        >
          {minutesOptions.map((m) => {
            return (
              <option key={`minute-${m}`} value={m}>
                {m}
              </option>
            );
          })}
        </select>
        <select
          id="meridiem-dropdown"
          aria-label="select AM or PM"
          aria-describedby="time-picker-error"
          value={theMeridiem}
          onChange={(e) => {
            return setTheMeridiem(e.target.value);
          }}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      {hasError && (
        <Hint id="time-picker-error" type="error" style={{ marginTop: '3px' }}>
          {errorText}
        </Hint>
      )}
    </fieldset>
  );
};

TimePicker.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Text to be displayed if error */
  errorText: PropTypes.string,
  /** Set the error state */
  hasError: PropTypes.bool,
  /** The hour of the day */
  hour: PropTypes.oneOf(hoursOptions),
  /** Label to be displayed with time picker */
  label: PropTypes.string,
  /** AM or PM */
  meridiem: PropTypes.oneOf(['AM', 'PM']),
  /** The minute of the current hout of the day */
  minutes: PropTypes.oneOf(minutesOptions),
  /** Callback to trigger on time change */
  onChange: PropTypes.func.isRequired,
};

TimePicker.defaultProps = {
  className: '',
  errorText: 'Error',
  hasError: false,
  hour: '12',
  label: 'Select a Time',
  meridiem: 'AM',
  minutes: '00',
};

export default TimePicker;
