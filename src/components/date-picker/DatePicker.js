import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import createFocusTrap from 'focus-trap';
import { useSpring, animated } from 'react-spring';
import FormField from '../form-field';
import Button from '../button';
import Label from '../label';
import validateDate from '../../utilities/validate-date';
import Overlay from '../overlay';

const DatePicker = ({
  classes,
  disabled,
  label,
  onChange,
  onDateChange,
  value,
  ...props
}) => {
  const calendar = useRef();
  const [focusTrap, setFocusTrap] = useState(null);
  const [theValue, setTheValue] = useState(validateDate(value));
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState('hidden');

  const [styleProps, set] = useSpring(() => {
    return {
      opacity: 1,
    };
  });

  const cancel = () => {
    setIsOpen(false);
  };

  const handleDateChange = (details) => {
    const date = new Date(details)
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .toString();

    if (date === 'Invalid Date') {
      onChange(date);
      return;
    }

    setTheValue(date);
    onChange(date);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      cancel();
    }
  };

  useEffect(() => {
    setFocusTrap(
      createFocusTrap(calendar.current, {
        allowOutsideClick: () => {
          return true;
        },
        clickOutsideDeactivates: false,
        escapeDeactivates: true,
        fallbackFocus: calendar,
      }),
    );
  }, [calendar]);

  useEffect(() => {
    set({
      opacity: isOpen ? 1 : 0,
    });

    if (isOpen) {
      setVisibility('visible');
    } else {
      setTimeout(() => {
        setVisibility('hidden');
      }, 300);
    }

    if (focusTrap) {
      setTimeout(() => {
        focusTrap[isOpen ? 'activate' : 'deactivate']();
      }, 200);
    }
  }, [focusTrap, isOpen]);

  return (
    <div className={classnames('date-picker', classes)}>
      {label && (
        <div className="date-picker__label">
          <Label>{label}</Label>
        </div>
      )}
      <div className="date-picker__input">
        <FormField
          mask="99/99/9999"
          onBlur={(e) => {
            return handleDateChange(e.target.value);
          }}
          value={theValue}
          disabled={disabled}
          {...props}
        />
        <Button
          classes="date-picker__input__btn"
          variant="hollow"
          size="md"
          onClick={() => {
            return setIsOpen(!isOpen);
          }}
          disabled={disabled}
        >
          Select a Date
        </Button>
      </div>
      <Overlay
        style={{ visibility }}
        onKeyDown={(e) => {
          return handleKeyDown(e);
        }}
        onClick={() => {
          return cancel();
        }}
      >
        <animated.div
          style={styleProps}
          className="date-picker__calendar"
          ref={calendar}
        >
          <Calendar
            onChange={(details) => {
              return handleDateChange(details);
            }}
            value={new Date(theValue)}
          />
        </animated.div>
      </Overlay>
    </div>
  );
};

DatePicker.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Disables a date picker form field and calandar. */
  disabled: PropTypes.bool,
  /** Specifies label text. */
  label: PropTypes.string,
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
  label: '',
  onChange() {},
  onDateChange() {},
  value: '',
};

export default DatePicker;
