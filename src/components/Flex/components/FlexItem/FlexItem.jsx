import React from 'react';
import PropTypes from 'prop-types';

const FlexItem = ({ children, flex, shrink, ...others }) => (
  <div
    className="atomikui-flex__item"
    style={{ ...(flex && { flex }), ...(shrink && { flexShrink: shrink }) }}
    {...others}
  >
    {children}
  </div>
);

FlexItem.propTypes = {
  /** Content to be rendered inside of the flex item */
  children: PropTypes.node,
  /** Applies CSS flex property. E.g. flex="0 0 50%" = flex: 0 0 50%; */
  flex: PropTypes.string,
  /** Applies CSS flex-shrink property. E.g. shrink="1" = flex-strink: 1; */
  shrink: PropTypes.string,
};

FlexItem.defaultProps = {
  children: <></>,
  flex: null,
  shrink: null,
};

export default FlexItem;
