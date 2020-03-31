import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';

const ButtonGroup = ({ classes, buttons, size, variant, ...others }) => (
  <div
    className={classnames('button-group', classes, {
      [`button-group--${variant}`]: variant,
    })}
    {...others}
  >
    {buttons.map(({ text, disabled }) => (
      <Button type="button" disabled={disabled} variant={variant}>
        {text}
      </Button>
    ))}
  </div>
);

ButtonGroup.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** buttons to be rendered as buttons */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      /** Specifies button content. */
      text: PropTypes.node,
      /** Specifies if button is diabled. */
      disabled: PropTypes.bool,
    }),
  ),
  /** Controls button group size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Specifies the button variation. */
  variant: PropTypes.oneOf(['', 'primary', 'secondary', 'tertiary']),
};

ButtonGroup.defaultProps = {
  classes: '',
  buttons: [],
  size: '',
};

export default ButtonGroup;
