import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { generateId } from '../../utilities/generateId';

const ButtonGroup = ({ classes, options, size, variant, ...others }) => {
  const [checked, setChecked] = useState(null);
  const name = generateId('button-group');

  return (
    <div
      className={classnames('button-group', classes, {
        [`button-group--${variant}`]: variant,
      })}
      {...others}
    >
      {options.map(({ text, disabled, onChange, value }, index) => {
        const id = generateId();

        return (
          <label
            htmlFor={id}
            className="button-group__item"
            key={Math.random()}
          >
            <input
              id={id}
              type="radio"
              name={name}
              checked={checked === index}
              value={value}
              onChange={(e) => {
                setChecked(index);
                onChange({ value: e.target.value, index });
              }}
            />
            <span
              className={classnames('btn', {
                [`btn--${variant}`]: variant,
              })}
              disabled={disabled}
            >
              {text}
            </span>
          </label>
        );
      })}
    </div>
  );
};

ButtonGroup.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** buttons to be rendered as buttons */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Specifies button content. */
      text: PropTypes.node,
      /** Specifies if button is diabled. */
      disabled: PropTypes.bool,
      /** Specifies if button is selected */
      selected: PropTypes.bool,
      /** Triggers onChange callback */
      onChange: PropTypes.func,
      /** Button group item value */
      value: PropTypes.string,
    }),
  ),
  /** Controls button group size */
  size: PropTypes.oneOf(['', 'sm', 'md', 'lg']),
  /** Specifies the button variation. */
  variant: PropTypes.oneOf(['', 'primary', 'secondary', 'tertiary']),
};

ButtonGroup.defaultProps = {
  classes: '',
  options: [],
  size: '',
};

export default ButtonGroup;
