import React from 'react';
import PropTypes from 'prop-types';

const FlexItem = ({ children, flexBasis, flexShrink, ...others }) => (
  <div
    className="atomikui-flex__item"
    style={{ flex: flexBasis, flexShrink }}
    {...others}
  >
    {children}
  </div>
);

FlexItem.propTypes = {
  /** Content to be rendered inside of the flex item */
  children: PropTypes.node,
  /** Applies CSS flex property. E.g. flexBasis="0 0 50%" = flex: 0 0 50%; */
  flexBasis: PropTypes.string,
  /** Applies CSS flex-shrink property. E.g. flexShrink="1" = flex-strink: 1; */
  flexShrink: PropTypes.string,
};

FlexItem.defaultProps = {
  children: <></>,
  flexBasis: null,
  flexShrink: null,
};

export default FlexItem;
