import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import MaskedField from 'react-masked-field';
import Hint from '../hint/Hint';
import Label from '../label/Label';
import generateId from '../../utilities/generateId';

const types = [
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'range',
  'search',
  'tel',
  'text',
  'textarea',
  'time',
  'url',
  'week',
];

const FormField = ({
  classes,
  disabled,
  errorText,
  hasError,
  helpText,
  id,
  label,
  mask,
  name,
  onChange,
  placeholder,
  readOnly,
  required,
  type,
  value,
  ...others
}) => {
  const uid = id || generateId();
  const inputName = name || uid;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;
  const fieldType = !types.includes(type) ? 'text' : type;

  const Input = mask ? MaskedField : 'input';

  return (
    <div
      className={classnames('rcl-formfield', classes, {
        'has-error': hasError,
      })}
    >
      {label && (
        <div className="rcl-formfield__label">
          <Label htmlFor={uid}>{label}</Label>
        </div>
      )}
      {type === 'textarea' ? (
        <textarea
          id={uid}
          name={inputName}
          className={classnames('rcl-formfield__textarea', classes, {})}
          placeholder={placeholder}
          value={value}
          aria-describedby={`${inputHintId} ${inputErrorId}`}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          onChange={onChange}
          {...others}
        />
      ) : (
        <Input
          id={uid}
          name={inputName}
          className={classnames('rcl-formfield__input', classes, {})}
          type={fieldType}
          mask={mask}
          placeholder={placeholder}
          value={value}
          aria-describedby={`${inputHintId} ${inputErrorId}`}
          readOnly={readOnly}
          disabled={disabled}
          onChange={onChange}
          required
          {...others}
        />
      )}
      {(helpText || errorText) && (
        <div className="rcl-formfield__hints">
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

FormField.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
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
  /** Optional form field mask */
  mask: PropTypes.string,
  /** onChange callback. */
  onChange: PropTypes.func,
  /** Specifies input placeholder text. */
  placeholder: PropTypes.string,
  /** Specifies input name attribute. */
  name: PropTypes.string,
  /** Makes a form field read only. */
  readOnly: PropTypes.bool,
  /** Specifies if a field is required. */
  required: PropTypes.bool,
  /** Specifies the type of input. */
  type: PropTypes.oneOf(types),
  /** Specifies the inputs value. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

FormField.defaultProps = {
  classes: '',
  disabled: false,
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  mask: '',
  name: '',
  onChange() {},
  placeholder: '',
  readOnly: false,
  required: false,
  type: 'text',
  value: '',
};

export default FormField;
