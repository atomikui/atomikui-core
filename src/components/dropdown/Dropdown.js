import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Hint from '../hint/Hint';
import Label from '../label/Label';
import { generateId } from '../../utilities/generateId';

const Dropdown = ({
  classes,
  defaultValue,
  errorText,
  hasError,
  helpText,
  id,
  label,
  labelless,
  name,
  options,
  required,
  ...others
}) => {
  const uid = id || generateId();
  const inputName = name || uid;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;

  return (
    <div className={classnames('dropdown', classes, {
      'has-error': hasError,
    })} {...others}>
      {!labelless && (
        <div className="dropdown__label">
          <Label htmlFor={uid}>{label}</Label>
        </div>
      )}
      <div className="dropdown__select">
        <select
          id={uid}
          name={inputName}
          className={classnames('dropdown__select__menu', classes, {})}
          defaultValue={defaultValue}
          required={required}
          aria-describedby={`${inputErrorId} ${inputErrorId}`}
          {...others}
        >
          {
            [{ text: 'Select One', value: '' }, ...options]
              .map(({ text, value }) => <option key={Math.random()} value={value}>{text}</option>)
          }
        </select>
      </div>
      {(helpText || errorText) && (
        <div className="dropdown__hints">
          {helpText && <Hint id={inputErrorId} text={helpText} />}
          {hasError && <Hint id={inputErrorId} text={errorText} type="error" />}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies and inputs default value */
  defaultValue: PropTypes.string,
  /** Text to be displayed when there is an error */
  errorText: PropTypes.string,
  /** Specifies the error state */
  hasError: PropTypes.bool,
  /** Assistive text to be displayed with form field */
  helpText: PropTypes.string,
  /** A unique id */
  id: PropTypes.string,
  /** Specifies label text */
  label: PropTypes.string,
  /** Hides label */
  labelless: PropTypes.bool,
  /** Specifies input name attribute */
  name: PropTypes.string,
  /** Selectable options in the dropdown */
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })),
  /** Specifies if a field is required */
  required: PropTypes.bool,
};

Dropdown.defaultProps = {
  classes: '',
  defaultValue: '',
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  labelless: false,
  name: '',
  options: [],
  required: false,
};

export default Dropdown;
