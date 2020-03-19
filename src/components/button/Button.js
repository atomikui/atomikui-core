import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ classes, text, type, ...others }) => {
  return (
    <button 
      className={classnames('.btn', classes, {})} 
      type={type} 
      {...others}>
      {text}
    </button>
  );
};

Button.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies a buttons text */
  text: PropTypes.string,
  /** Specifies the type of button */
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

Button.defaultProps = {
  classes: '',
  text: '',
  type: 'button'
};

export default Button;