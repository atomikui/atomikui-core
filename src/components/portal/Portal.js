import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, container }) => {
  return <>{createPortal(children, container)}</>;
};

Portal.propTypes = {
  /** Children to be rendered in the target container */
  children: PropTypes.node,
  /** Container where the Children will be rendered */
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
};

Portal.defaultProps = {
  children: <></>,
  container: null,
};

export default Portal;
