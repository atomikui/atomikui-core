import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Hint from '../hint/Hint';
import Label from '../label/Label';

const Switch = ({
  className,
  checked,
  disabled,
  errorText,
  hasError,
  helpText,
  id,
  label,
  layout,
  name,
  onChange,
  required,
}) => {
  const uid = id || shortid.generate();
  const inputName = name || uid;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;

  return (
    <>
      <div
        htmlFor={uid}
        className={classnames('atomikui-switch', className, {
          'is-checked': checked,
          'is-disabled': disabled,
          'is-stacked': layout === 'stacked',
          'has-error': hasError,
        })}
      >
        <input
          id={uid}
          name={inputName}
          className="atomikui-switch__input"
          type="checkbox"
          checked={checked}
          required={required}
          aria-describedby={`${inputHintId} ${inputErrorId}`}
          onChange={onChange}
        />
        <div className="atomikui-switch__label">
          <Label htmlFor={uid}>{label}</Label>
        </div>
        <div
          className="atomikui-switch__toggle"
          onClick={!disabled ? onChange : null}
        ></div>
      </div>
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
};

Switch.propTypes = {
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Specifies and inputs default checked state. */
  checked: PropTypes.bool,
  /** Specifies the switch disabled state. */
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
  /** Specifies if layout is inline or stacked. */
  layout: PropTypes.oneOf(['stacked']),
  /** Specifies input name attribute. */
  name: PropTypes.string,
  /** Callback triggered onChange. */
  onChange: PropTypes.func,
  /** Specifies if a field is required. */
  required: PropTypes.bool,
};

Switch.defaultProps = {
  className: '',
  checked: false,
  disabled: false,
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  layout: null,
  name: '',
  onChange() {},
  required: false,
};

export default Switch;
