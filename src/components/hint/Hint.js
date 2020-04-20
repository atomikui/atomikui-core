import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Hint = ({ className, children, type, ...others }) => {
  return (
    <div
      className={classnames('rcl-hint', className, {
        [`rcl-hint--${type}`]: type,
      })}
      {...others}
    >
      {children}
    </div>
  );
};

Hint.propTypes = {
  /** Custom classes to be added to Label component. */
  className: PropTypes.string,
  /** Hint content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies the typr of hint. */
  type: PropTypes.oneOf(['error', 'warning', 'success']),
};

Hint.defaultProps = {
  className: '',
  children: null,
  type: null,
};

export default Hint;
