import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { generateId } from '../../utilities/generateId';
import Label from '../label';

const ButtonGroup = ({ classes, label, options, size, stretch, ...others }) => {
  const name = generateId('button-group');

  return (
    <>
      {label && (
        <div className="flex">
          <Label>{label}</Label>
        </div>
      )}
      <div
        className={classnames('button-group', classes, {
          [`button-group--${size}`]: size,
          'button-group--stretch': stretch,
        })}
        {...others}
      >
        {options.map(({ checked, text, disabled, onChange, value }, index) => {
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
                checked={checked}
                value={value}
                onChange={() => onChange({ value, index })}
              />
              <span className="button-group__item__btn">
                <span>{text}</span>
              </span>
            </label>
          );
        })}
      </div>
    </>
  );
};

ButtonGroup.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** buttons to be rendered as buttons */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Specifies if button is checked */
      checked: PropTypes.bool,
      /** Specifies button content. */
      text: PropTypes.node,
      /** Specifies if button is diabled. */
      disabled: PropTypes.bool,
      /** Triggers onChange callback */
      onChange: PropTypes.func,
      /** Button group item value */
      value: PropTypes.string,
    }),
  ),
  /** Button group label */
  label: PropTypes.string,
  /** Controls button group size */
  size: PropTypes.oneOf(['', 'sm', 'md', 'lg']),
  /** Makes button group fill width of parent */
  stretch: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  classes: '',
  label: '',
  options: [],
  stretch: false,
  size: '',
};

export default ButtonGroup;
