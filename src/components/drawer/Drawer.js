import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Drawer = ({ classes, ...others }) => {
  return <div className={classnames('drawer', classes, {})} {...others}></div>;
};

Drawer.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

Drawer.defaultProps = {
  classes: '',
};

export default Drawer;
