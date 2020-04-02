import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Label from '../label';

const ButtonGroup = ({
  children,
  classes,
  label,
  required,
  size,
  stretch,
  ...others
}) => (
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
      role="group"
      {...others}
    >
      {children}
    </div>
  </>
);

ButtonGroup.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Children to be rendered in the button group */
  children: PropTypes.node,
  /** Button group label */
  label: PropTypes.string,
  /** Specifies field as required */
  required: PropTypes.bool,
  /** Controls button group size */
  size: PropTypes.oneOf(['', 'sm', 'md', 'lg']),
  /** Makes button group fill width of parent */
  stretch: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  classes: '',
  children: null,
  label: '',
  required: false,
  size: '',
  stretch: false,
};

export default ButtonGroup;
