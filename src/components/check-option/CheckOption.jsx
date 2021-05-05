import React, { forwardRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Hint from '../hint/Hint';
import Label from '../label/Label';

const types = ['checkbox', 'radio'];

const CheckOption = forwardRef(
  (
    {
      ariaDescribedBy,
      ariaLabel,
      className,
      checked,
      defaultChecked,
      disabled,
      errorText,
      hasError,
      helpText,
      id,
      label,
      name,
      onChange,
      required,
      theme,
      themeVariant,
      type,
      value,
      ...others
    },
    ref,
  ) => {
    const uid = id || shortid.generate();
    const inputName = name || uid;
    const inputHintId = `${inputName}_hint`;
    const inputErrorId = `${inputName}_error`;
    const fieldType = !types.includes(type) ? 'checkbox' : type;

    return (
      <>
        <Label
          data-test-id="check-option"
          htmlFor={uid}
          className={classnames('atomikui-check-option', className, {
            'has-error': hasError,
            'is-disabled': disabled,
            'atomikui-check-option--radio': type === 'radio',
            [`atomikui-check-option--${theme}${
              themeVariant ? `-${themeVariant}` : ''
            }`]: theme,
          })}
        >
          <input
            ref={ref}
            id={uid}
            type={fieldType}
            name={inputName}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-describedby={
              ariaDescribedBy || `${inputHintId} ${inputErrorId}`
            }
            onChange={onChange}
            value={value}
            {...(checked && { checked })}
            {...(defaultChecked && !checked && { defaultChecked })}
            required
            {...others}
          />
          <span
            className="atomikui-check-option__icon"
            data-test-id="check-option-icon"
          >
            <Icon
              className={classnames({
                'is-hidden': !checked && !defaultChecked,
              })}
              icon={faCheck}
            />
          </span>
          {label}
        </Label>
        {(helpText || errorText) && (
          <div className="margin-top-2">
            {helpText && <Hint id={inputHintId}>{helpText}</Hint>}
            {hasError && (
              <Hint id={inputErrorId} type="error">
                {errorText}
              </Hint>
            )}
          </div>
        )}
      </>
    );
  },
);

CheckOption.propTypes = {
  /** Sets aria-describedby attribute */
  ariaDescribedBy: PropTypes.string,
  /** Sets aria-label attribute */
  ariaLabel: PropTypes.string,
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Specifies the form option checked state. */
  checked: PropTypes.bool,
  /** Adds initial  default checked state for uncontrolled CheckOption */
  defaultChecked: PropTypes.bool,
  /** Specifies form option disabled state. */
  disabled: PropTypes.bool,
  /** Text to be displayed when there is an error. */
  errorText: PropTypes.string,
  /** Specifies the error state. */
  hasError: PropTypes.bool,
  /** Assistive text to be displayed with form field. */
  helpText: PropTypes.string,
  /** A unique id. */
  id: PropTypes.string,
  /** Specifies label text. */
  label: PropTypes.string,
  /** Specifies input name attribute. */
  name: PropTypes.string,
  /** OnChange callback. */
  onChange: PropTypes.func,
  /** Specifies if a field is required. */
  required: PropTypes.bool,
  /** Specifies the color variation. */
  theme: PropTypes.oneOf([
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'sky-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'light-orange',
    'orange',
    'deep-orange',
    'amber',
    'brown',
    'gray',
    'blue-gray',
    'black',
    'white',
  ]),
  /** The theme color variant */
  themeVariant: PropTypes.oneOf(['light']),
  /** Specifies the type of input. */
  type: PropTypes.oneOf(types),
  /** Check Option value */
  value: PropTypes.string,
};

CheckOption.defaultProps = {
  ariaDescribedBy: '',
  ariaLabel: '',
  className: '',
  checked: false,
  defaultChecked: false,
  disabled: false,
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  name: '',
  onChange() {},
  required: false,
  theme: null,
  themeVariant: null,
  type: 'checkbox',
  value: '',
};

CheckOption.displayName = 'CheckOption';

export default CheckOption;
