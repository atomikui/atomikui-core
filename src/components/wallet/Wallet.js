import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Wallet = ({ className, ...others }) => {
  return (
    <div
      className={classnames('atomikui-wallet', className, {})}
      {...others}
    ></div>
  );
};

Wallet.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
};

Wallet.defaultProps = {
  className: '',
};

export default Wallet;
