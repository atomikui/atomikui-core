import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Hint = ({ classes, text, type, ...others }) => (
  <div className={classnames('hint', classes, {
    [`hint--${type}`]: type
  })} {...others}>{text}</div>
);

Hint.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['', 'error', 'warning', 'success'])
};

Hint.defaultProps = {
  classes: '',
  type: '',
  text: '',
}

export default Hint;