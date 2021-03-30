import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ color }) => (
  <div style={{ padding: '16px', background: color }} />
);

Box.propTypes = {
  color: PropTypes.string,
};

Box.defaultProps = {
  color: '#000',
};

export default Box;
