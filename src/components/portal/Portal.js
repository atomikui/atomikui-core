import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, container, disabled }) => {
  return <>{disabled ? children : createPortal(children, container)}</>;
};

Portal.propTypes = {
  /** Children to be rendered in the target container */
  children: PropTypes.node,
  /** Container where the Children will be rendered */
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  /** Disables the portal and renders the children in the current DOM node */
  disabled: PropTypes.bool,
};

Portal.defaultProps = {
  children: <></>,
  container: null,
  disabled: false,
};

export default Portal;
