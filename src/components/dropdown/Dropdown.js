import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Hint from '../hint/Hint';
import Label from '../label/Label';
import generateId from '../../utilities/generateId';

const Dropdown = ({
  className,
  disabled,
  errorText,
  hasError,
  helpText,
  id,
  label,
  labelless,
  name,
  onChange,
  options,
  required,
  value,
  ...others
}) => {
  const uid = id || generateId();
  const inputName = name || uid;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;

  return (
    <div
      className={classnames('atomikui-dropdown', className, {
        'has-error': hasError,
        'is-disabled': disabled,
      })}
      {...others}
    >
      {!labelless && (
        <div className="atomikui-dropdown__label">
          <Label htmlFor={uid}>{label}</Label>
        </div>
      )}
      <div className="atomikui-dropdown__select">
        <select
          id={uid}
          name={inputName}
          className={classnames(
            'atomikui-dropdown__select__menu',
            className,
            {},
          )}
          required={required}
          aria-describedby={`${inputHintId} ${inputErrorId}`}
          value={value}
          disabled={disabled}
          onChange={onChange}
          {...others}
        >
          {[
            {
              text: 'Select One',
              value: '',
            },
            ...options,
            // eslint-disable-next-line no-shadow
          ].map(({ text, value }, index) => {
            return (
              <option key={`option-${index}`} value={value}>
                {text}
              </option>
            );
          })}
        </select>
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
    </div>
  );
};

Dropdown.propTypes = {
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Disables a form field. */
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
  /** Hides label. */
  labelless: PropTypes.bool,
  /** Specifies input name attribute. */
  name: PropTypes.string,
  /** onChange callback. */
  onChange: PropTypes.func,
  /** Selectable options in the dropdown. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Option text. */
      text: PropTypes.string,
      /** Option value. */
      value: PropTypes.string,
    }),
  ),
  /** Specifies if a field is required. */
  required: PropTypes.bool,
  /** Dropdown value. */
  value: PropTypes.string,
};

Dropdown.defaultProps = {
  className: '',
  disabled: false,
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  labelless: false,
  name: '',
  onChange() {},
  options: [],
  required: false,
  value: '',
};

export default Dropdown;
