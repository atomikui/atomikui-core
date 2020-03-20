import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Hint = ({ classes, text, type, ...others }) => (
  <div className={classnames('hint', classes, {
    [`hint--${type}`]: type
  })} {...others}>{text}</div>
);

Hint.propTypes = {
  /** Custom classes to be added to Label component */
  classes: PropTypes.string,
  /** Hint text */
  text: PropTypes.string,
  /** Specifies the typr of hint */
  type: PropTypes.oneOf(['', 'error', 'warning', 'success'])
};

Hint.defaultProps = {
  classes: '',
  type: '',
  text: '',
}

export default Hint;