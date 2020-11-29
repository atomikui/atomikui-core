import React, { forwardRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import MaskedField from 'react-masked-field';
import Hint from '../hint/Hint';
import Label from '../label/Label';

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

const FormField = forwardRef(
  (
    {
      borderless,
      className,
      defaultValue,
      disabled,
      errorText,
      hasError,
      helpText,
      id,
      label,
      labelProps,
      mask,
      name,
      onChange,
      placeholder,
      readOnly,
      required,
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
    const fieldType = !types.includes(type) ? 'text' : type;

    const Input = mask ? MaskedField : 'input';

    return (
      <div
        data-test-id="formfield"
        className={classnames('atomikui-formfield', className, {
          'has-error': hasError,
          'atomikui-formfield--borderless': borderless,
        })}
      >
        {label && (
          <div
            data-test-id="formfield-label"
            className="atomikui-formfield__label"
          >
            <Label htmlFor={uid} {...labelProps}>
              {label}
            </Label>
          </div>
        )}
        {type === 'textarea' ? (
          <textarea
            {...(!mask && { ref })}
            id={uid}
            name={inputName}
            className={classnames(
              'atomikui-formfield__textarea',
              className,
              {},
            )}
            placeholder={placeholder}
            {...(value && { value })}
            {...(defaultValue && !value && { defaultValue })}
            defaultValue={defaultValue}
            aria-describedby={`${inputHintId} ${inputErrorId}`}
            required={required}
            readOnly={readOnly}
            disabled={disabled}
            onChange={onChange}
            {...others}
          />
        ) : (
          <Input
            {...(!mask && { ref })}
            id={uid}
            name={inputName}
            className={classnames('atomikui-formfield__input', className, {})}
            type={fieldType}
            mask={mask}
            placeholder={placeholder}
            {...(value && { value })}
            {...(defaultValue && !value && { defaultValue })}
            aria-describedby={`${inputHintId} ${inputErrorId}`}
            readOnly={readOnly}
            disabled={disabled}
            onChange={onChange}
            required
            {...others}
          />
        )}
        {(helpText || errorText) && (
          <div className="atomikui-formfield__hints">
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
  },
);

FormField.propTypes = {
  /** Sets forn field with no border */
  borderless: PropTypes.bool,
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Sets the defaultValue for uncontrolled form fields */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Props to be spread on label element */
  // eslint-disable-next-line react/forbid-prop-types
  labelProps: PropTypes.object,
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
};

FormField.defaultProps = {
  borderless: false,
  className: '',
  defaultValue: '',
  disabled: false,
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  labelProps: null,
  mask: '',
  name: '',
  onChange() {},
  placeholder: '',
  readOnly: false,
  required: false,
  type: 'text',
  value: '',
};

FormField.displayName = 'FormField';

export default FormField;
