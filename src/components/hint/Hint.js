import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Hint = ({
  classes, children, type, ...others
}) => (
  <div className={classnames('hint', classes, {
    [`hint--${type}`]: type,
  })} {...others}>{children}</div>
);

Hint.propTypes = {
  /** Custom classes to be added to Label component */
  classes: PropTypes.string,
  /** Hint content */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies the typr of hint */
  type: PropTypes.oneOf(['', 'error', 'warning', 'success']),
};

Hint.defaultProps = {
  classes: '',
  children: null,
  text: '',
};

export default Hint;
