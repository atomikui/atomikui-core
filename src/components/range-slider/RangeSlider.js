import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const RangeSlider = ({
  classes,
  errorText,
  hasError,
  helpText,
  id,
  label,
  labelless,
  max,
  min,
  name,
  placeholder,
  required,
  step,
  type,
  value,
  values,
  ...others
}) => {
  const [rangeValue, setRangeValue] = useState(value);

  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  const numTicks = max / min;

  return (
    <div className={classnames('range-slider', classes, {
      'has-error': hasError,
    })}>
      <input
        id={id}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={`$${rangeValue}`}
        min={min}
        max={max}
        step={step}
        value={rangeValue}
        type="range"
        onChange={(e) => handleChange(e)}
        {...others}
      />
    </div>
  );
};

RangeSlider.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
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
  /** Maximum range value */
  max: PropTypes.string,
  /** Minimum range value */
  min: PropTypes.string,
  /** Specifies input name attribute */
  name: PropTypes.string,
  /** Specifies if a field is required */
  required: PropTypes.bool,
  /** Step numerical increment */
  step: PropTypes.string,
  /** Specifies the inputs value */
  value: PropTypes.string,
  /** Values for each step */
  values: PropTypes.arrayOf(PropTypes.string),
};

RangeSlider.defaultProps = {
  classes: '',
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  labelless: false,
  max: '',
  min: '',
  name: '',
  required: false,
  step: '',
  value: '',
  values: [],
};

export default RangeSlider;
