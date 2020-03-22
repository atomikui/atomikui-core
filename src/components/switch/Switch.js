import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Hint from '../hint/Hint';
import Label from '../label/Label';
import { generateId } from '../../utilities/generateId';

const Switch = ({
  classes, 
  defaultChecked,
  errorText, 
  hasError, 
  helpText, 
  id,
  label, 
  layout,
  onChange,
  required
}) => {
  const uid = id || generateId();

  return (
    <>
      <div htmlFor={uid} className={classnames('switch', classes, {
        'is-checked': defaultChecked,
        'is-stacked': layout === 'stacked',
        'has-error': hasError
      })}>
        <input 
          className="switch__input" 
          id={uid} 
          type="checkbox" 
          defaultChecked={defaultChecked} 
          required={required}
          onChange={() => onChange()} />
        <div className="switch__label">
          <Label htmlFor={uid}>{label}</Label>
        </div>
        <div className="switch__toggle" onClick={() => onChange()}></div>
      </div>
      {(helpText || errorText) && (
        <div className="formfield__hints">
          {helpText && <Hint text={helpText} />}
          {hasError && <Hint text={errorText} type="error" />}
        </div>
      )}
    </>
  );
};

Switch.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string, 
  /** Specifies and inputs default default checked state */
  defaultChecked: PropTypes.bool,
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
  /** Specifies if layout is inline or stacked */
  layout: PropTypes.oneOf(['', 'stacked']),
  /** Callback triggered onChange */
  onChange: PropTypes.func,
  /** Specifies if a field is required */
  required: PropTypes.bool,
};

Switch.defaultProps = {
  classes: '', 
  defaultChecked: false,
  errorText: '', 
  hasError: false, 
  helpText: '', 
  id: null,
  label: '', 
  layout: '',
  onChange() {},
  required: false
};

export default Switch;