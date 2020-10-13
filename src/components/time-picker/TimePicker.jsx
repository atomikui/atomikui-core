/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const hoursOptions = [...Array(13).keys()].slice(1, 13).map((hour) => {
  return String(hour);
});

const minutesOptions = [...Array(60).keys()].map((minute) => {
  return minute < 10 ? `0${minute}` : String(minute);
});

const TimePicker = ({
  className,
  hour,
  minutes,
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
    <div className={classnames('atomikui-time-picker', className)} {...others}>
      <select
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
  hour: PropTypes.oneOf(hoursOptions),
  /** AM or PM */
  meridiem: PropTypes.oneOf(['AM', 'PM']),
  /** The minute of the current hout of the day */
  minutes: PropTypes.oneOf(minutesOptions),
  /** Callback to trigger on time change */
  onChange: PropTypes.func.isRequired,
};

TimePicker.defaultProps = {
  className: '',
  hour: '12',
  meridiem: 'AM',
  minutes: '00',
};

export default TimePicker;
