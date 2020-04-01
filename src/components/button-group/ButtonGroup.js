import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { generateId } from '../../utilities/generateId';
import Label from '../label';

const ButtonGroup = ({
  classes,
  label,
  onChange,
  options,
  required,
  size,
  stretch,
  type,
  ...others
}) => {
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
        {options.map(({ checked, text, disabled, value, ...props }, index) => {
          const id = generateId();

          return (
            <label
              htmlFor={id}
              className="button-group__item"
              key={Math.random()}
            >
              <input
                id={id}
                type={type}
                name={name}
                value={value}
                required={required}
                onChange={() => onChange({ value, index })}
                {...props}
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
  /** Triggers onChange callback */
  onChange: PropTypes.func,
  /** buttons to be rendered as buttons */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Specifies if button is checked */
      checked: PropTypes.bool,
      /** Specifies button content. */
      text: PropTypes.node,
      /** Specifies if button is diabled. */
      disabled: PropTypes.bool,
      /** Button group item value */
      value: PropTypes.string,
    }),
  ),
  /** Button group label */
  label: PropTypes.string,
  /** Specifies field as required */
  required: PropTypes.bool,
  /** Controls button group size */
  size: PropTypes.oneOf(['', 'sm', 'md', 'lg']),
  /** Makes button group fill width of parent */
  stretch: PropTypes.bool,
  /** Spcifies button group type */
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

ButtonGroup.defaultProps = {
  classes: '',
  label: '',
  options: [],
  size: '',
  stretch: false,
  type: 'radio',
};

export default ButtonGroup;
