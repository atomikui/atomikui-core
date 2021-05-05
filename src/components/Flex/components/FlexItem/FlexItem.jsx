import React from 'react';
import PropTypes from 'prop-types';

const FlexItem = ({ children, flexBasis }) => (
  <div className="atomikui-flex__item" style={{ flex: flexBasis }}>
    {children}
  </div>
);

FlexItem.propTypes = {
  children: PropTypes.node,
  flexBasis: PropTypes.string,
};

FlexItem.defaultProps = {
  children: <></>,
  flexBasis: null,
};

export default FlexItem;
