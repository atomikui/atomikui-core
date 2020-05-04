import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ThemeContext from '../../theme-context';

const Label = ({ className, children, ...others }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <label
      className={classnames('rcl-label', className, {
        [`rcl-label--${theme}`]: theme,
      })}
      {...others}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  /** Custom classes to be added to Label component. */
  className: PropTypes.string,
  /** Label text. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Label.defaultProps = {
  className: '',
  children: <></>,
};

export default Label;
