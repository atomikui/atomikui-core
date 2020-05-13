import React from 'react';
import PropTypes from 'prop-types';

const Sticky = ({ children, ...others }) => {
  return <div className="atomikui-sticky" {...others}></div>;
};

Sticky.propTypes = {
  /** Sticky content */
  children: PropTypes.node,
};

Sticky.defaultProps = {
  children: <></>,
};

export default Sticky;
