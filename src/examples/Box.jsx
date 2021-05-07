import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ backgroundColor, children }) => (
  <div
    className="padding-16 text-align-center"
    style={{
      background: '#01579b',
      color: 'white',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      display: 'flex',
    }}
  >
    <div>{children}</div>
  </div>
);

Box.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

Box.defaultProps = {
  backgroundColor: '#01579b',
  children: 'Item',
};

export default Box;
