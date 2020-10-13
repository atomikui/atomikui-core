/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const hours = [...Array(13).keys()].slice(1, 13).map((hour) => {
  return String(hour);
});

const minutes = [...Array(60).keys()].map((minute) => {
  return minute < 10 ? `0${minute}` : String(minute);
});

const TimePicker = ({
  className,
  hour,
  minute,
  meridiem,
  onChange,
  ...others
}) => {
  const [theHour, setTheHour] = useState(hour);
  const [theMinute, setTheMinute] = useState(hour);
  const [theMeridiem, setTheMeridiem] = useState(meridiem);

  useEffect(() => {
    onChange({
      hour: theHour,
      minute: theMinute,
      meridiem: theMeridiem,
      timeString: `${theHour}:${theMinute} ${theMeridiem}`,
    });
  }, [theHour, theMinute, theMeridiem]);

  return (
    <div className={classnames('atomikui-time-picker', className)} {...others}>
      <select
        value={theHour}
        onChange={(e) => {
          return setTheHour(e.target.value);
        }}
      >
        {hours.map((h) => {
          return (
            <option key={`hour-${h}`} value={h}>
              {h}
            </option>
          );
        })}
      </select>
      <span>:</span>
      <select
        value={theMinute}
        onChange={(e) => {
          return setTheMinute(e.target.value);
        }}
      >
        {minutes.map((m) => {
          return (
            <option key={`minute-${m}`} value={m}>
              {m}
            </option>
          );
        })}
      </select>
      <select
        value={theMeridiem}
        onChange={(e) => {
          return setTheMeridiem(e.target.value);
        }}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

TimePicker.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** The hour of the day */
  hour: PropTypes.oneOf(hours),
  /** AM or PM */
  meridiem: PropTypes.oneOf(['AM', 'PM']),
  /** The minute of the current hout of the day */
  minute: PropTypes.oneOf(minutes),
  /** Callback to trigger on time change */
  onChange: PropTypes.func.isRequired,
};

TimePicker.defaultProps = {
  className: '',
  hour: '12',
  meridiem: 'AM',
  minute: '00',
};

export default TimePicker;
