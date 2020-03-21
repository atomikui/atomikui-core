import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Dropdown = ({ classes, ...others }) => {
  return (
    <select className={classnames('select', classes, {})} {...others}></select>
  );
};

Dropdown.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
};

Dropdown.defaultProps = {
  classes: ''
};

export default Dropdown;