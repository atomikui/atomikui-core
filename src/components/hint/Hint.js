import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ThemeContext from '../../theme-context';

const Hint = ({ className, children, type, ...others }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={classnames('rcl-hint', className, {
        [`rcl-hint--${type}`]: type,
        [`rcl-hint--${theme}`]: theme,
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
  children: <></>,
  type: null,
};

export default Hint;
