import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { generateId } from '../../utilities/generateId';
import Hint from '../hint';
import Label from '../label';

const RangeSlider = ({
  classes,
  disabled,
  errorText,
  hasError,
  helpText,
  hideLabelsOnMobile,
  id,
  label,
  max,
  min,
  name,
  onChange,
  required,
  step,
  type,
  ticks,
  value,
  ...others
}) => {
  const [rangeValue, setRangeValue] = useState(value);

  const uid = id || generateId();
  const inputName = name || uid;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;

  const handleChange = (updateValue) => {
    setRangeValue(updateValue);
    onChange(updateValue);
  };

  return (
    <>
      {label && <Label>{label}</Label>}
      <div className={classnames('range-slider', classes, {
        'has-error': hasError,
        'is-disabled': disabled,
      })}>
        <input
          id={uid}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuetext={`$${rangeValue}`}
          aria-describedby={`${inputErrorId} ${inputHintId}`}
          min={min}
          max={max}
          step={step}
          value={rangeValue}
          type="range"
          onChange={(e) => handleChange(e.target.value)}
          required={required}
          disabled={disabled}
          {...others}
        />
        {ticks && (
          <div className="range-slider__ticks" aria-hidden="true">
            {ticks.map(({ text, val }) => (
              <div
                key={Math.random()}
                className="range-slider__ticks__tick"
                {...(!disabled && { onClick: () => handleChange(val) })}
              >
                <div className={classnames('range-slider__ticks__label', {
                  'is-selected': val === rangeValue,
                  'is-hidden-on-mobile': hideLabelsOnMobile,
                })}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {(helpText || errorText) && (
        <div className="formfield__hints">
          {helpText && <Hint id={inputHintId}>{helpText}</Hint>}
          {hasError && <Hint id={inputErrorId} type="error">{errorText}</Hint>}
        </div>
      )}
    </>
  );
};

RangeSlider.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies range slider disabled state */
  disabled: PropTypes.bool,
  /** Text to be displayed when there is an error */
  errorText: PropTypes.string,
  /** Specifies the error state */
  hasError: PropTypes.bool,
  /** Assistive text to be displayed with form field */
  helpText: PropTypes.string,
  /** hides slider tick labels on mobile */
  hideLabelsOnMobile: PropTypes.bool,
  /** A unique id */
  id: PropTypes.string,
  /** Specifies label text */
  label: PropTypes.string,
  /** Maximum range value */
  max: PropTypes.string,
  /** Minimum range value */
  min: PropTypes.string,
  /** Specifies input name attribute */
  name: PropTypes.string,
  /** onChange callback */
  onChange: PropTypes.func,
  /** Specifies if a field is required */
  required: PropTypes.bool,
  /** Step numerical increment */
  step: PropTypes.string,
  /** Ticks for each step */
  ticks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    val: PropTypes.string,
  })),
  /** Specifies the inputs value */
  value: PropTypes.string,
};

RangeSlider.defaultProps = {
  classes: '',
  disabled: false,
  errorText: '',
  hasError: false,
  helpText: '',
  hideLabelsOnMobile: false,
  id: null,
  label: '',
  max: '',
  min: '',
  name: '',
  onChange() {},
  required: false,
  step: '',
  value: '',
};

export default RangeSlider;
