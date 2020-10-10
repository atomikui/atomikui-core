import React, { useState, useEffect, useRef, forwardRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import createFocusTrap from 'focus-trap';
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import FormField from '../form-field';
import Button from '../button';
import Label from '../label';
import validateDate from '../../utilities/validate-date';
import Overlay from '../overlay';

const DatePicker = forwardRef(
  (
    {
      className,
      disabled,
      id,
      label,
      onChange,
      onDateChange,
      value,
      ...others
    },
    ref,
  ) => {
    const uid = `datepicker-${shortid.generate()}`;
    const calendar = useRef();
    const [focusTrap, setFocusTrap] = useState(null);
    const [theValue, setTheValue] = useState(validateDate(value) || new Date());
    const [isOpen, setIsOpen] = useState(false);

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
      if (focusTrap) {
        setTimeout(() => {
          focusTrap[isOpen ? 'activate' : 'deactivate']();
        }, 200);
      }
    }, [focusTrap, isOpen]);

    return (
      <div className={classnames('atomikui-date-picker', className)}>
        {label && (
          <div className="atomikui-date-picker__label">
            <Label htmlFor={uid}>{label}</Label>
          </div>
        )}
        <div className="atomikui-date-picker__input">
          <FormField
            ref={ref}
            id={uid}
            mask="99/99/9999"
            onBlur={(e) => {
              return handleDateChange(e.target.value);
            }}
            value={theValue}
            disabled={disabled}
            {...others}
          />
          <Button
            className="atomikui-date-picker__input__btn"
            theme="hollow"
            size="md"
            onClick={() => {
              return setIsOpen(!isOpen);
            }}
            disabled={disabled}
            aria-label="show calendar button"
          >
            <Icon icon={faCalendarAlt} size="lg" />
          </Button>
        </div>
        <Overlay isActive={isOpen} onKeyDown={handleKeyDown} onClick={cancel}>
          <div className="atomikui-date-picker__calendar" ref={calendar}>
            <Calendar
              onChange={(details) => {
                return handleDateChange(details);
              }}
              value={new Date(theValue)}
            />
          </div>
        </Overlay>
      </div>
    );
  },
);

DatePicker.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Disables a date picker form field and calandar. */
  disabled: PropTypes.bool,
  /** Id attribute */
  id: PropTypes.string,
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
  className: '',
  disabled: false,
  id: '',
  label: '',
  onChange: null,
  onDateChange: null,
  value: '',
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
