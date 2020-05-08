import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ className, children, ...others }) => {
  return (
    <label className="rcl-label" {...others}>
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
