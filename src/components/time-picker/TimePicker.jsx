/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Hint from '../hint';

const hoursOptions = [...Array(13).keys()]
  .slice(1, 13)
  .map((hour) => String(hour));

const minutesOptions = [...Array(60).keys()].map((minute) =>
  minute < 10 ? `0${minute}` : String(minute),
);

const TimePicker = ({
  className,
  errorText,
  hasError,
  hour,
  minutes,
  label,
  amOrPm,
  onChange,
  ...others
}) => {
  const [hourValue, setHourValue] = useState(hour);
  const [minuteValue, setMinuteValue] = useState(minutes);
  const [amOrPmValue, setAmOrPmValue] = useState(amOrPm);

  useEffect(() => {
    onChange({
      hour: hourValue,
      minutes: minuteValue,
      amOrPM: amOrPmValue,
      timeString: `${hourValue}:${minuteValue} ${amOrPmValue}`,
    });
  }, [hourValue, minuteValue, amOrPmValue]);

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
          data-test-id="timepicker-hour-dropdown"
          aria-label="select the hour of the day"
          aria-describedby="time-picker-error"
          value={hourValue}
          onChange={(e) => setHourValue(e.target.value)}
        >
          {hoursOptions.map((h) => (
            <option key={`hour-${h}`} value={h}>
              {h}
            </option>
          ))}
        </select>
        <span>:</span>
        <select
          data-test-id="timepicker-minutes-dropdown"
          aria-label="select the minute of the hour"
          aria-describedby="time-picker-error"
          value={minuteValue}
          onChange={(e) => setMinuteValue(e.target.value)}
        >
          {minutesOptions.map((m) => (
            <option key={`minute-${m}`} value={m}>
              {m}
            </option>
          ))}
        </select>
        <select
          data-test-id="timepicker-amOrPm-dropdown"
          aria-label="select AM or PM"
          aria-describedby="time-picker-error"
          value={amOrPmValue}
          onChange={(e) => setAmOrPmValue(e.target.value)}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      {hasError && (
        <Hint type="error" style={{ marginTop: '3px' }}>
          {errorText}
        </Hint>
      )}
    </fieldset>
  );
};

TimePicker.propTypes = {
  /** AM or PM */
  amOrPm: PropTypes.oneOf(['AM', 'PM']),
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
  /** The minute of the current hout of the day */
  minutes: PropTypes.oneOf(minutesOptions),
  /** Callback to trigger on time change */
  onChange: PropTypes.func.isRequired,
};

TimePicker.defaultProps = {
  amOrPm: 'AM',
  className: '',
  errorText: 'Error',
  hasError: false,
  hour: '12',
  label: 'Select a Time',
  minutes: '00',
};

export default TimePicker;
