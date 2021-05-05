import React from 'react';
import PropTypes from 'prop-types';

const FlexItem = ({ children, flexBasis }) => (
  <div className="atomikui-flex__item" style={{ flex: flexBasis }}>
    {children}
  </div>
);

FlexItem.propTypes = {
  /** Content to be rendered inside of the flex item */
  children: PropTypes.node,
  /** Applies CSS flex property. E.g. flexBasis="0 0 50%" = flex: 0 0 50%; */
  flexBasis: PropTypes.string,
};

FlexItem.defaultProps = {
  children: <></>,
  flexBasis: null,
};

export default FlexItem;
