import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const WalletItem = ({ className, ...others }) => {
  return (
    <div
      className={classnames('atomikui-wallet-item', className, {})}
      {...others}
    ></div>
  );
};

WalletItem.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Last 4 digits od account number */
  endsIn: PropTypes.string,
  /** Sets payment method as default */
  isDefault: PropTypes.bool,
  /** Payment method type */
  type: PropTypes.oneOf(['bank', 'card']),
};

WalletItem.defaultProps = {
  className: '',
  endsIn: '',
  isDefault: false,
  type: 'card',
};

export default WalletItem;
