import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import visaIcon from './images/visa.png';
import masterCardIcon from './images/mastercard.png';
import discoverIcon from './images/discover.png';
import americanexpressIcon from './images/americanexpress.png';
import paypalIcon from './images/paypal.png';

const WalletItem = ({ className, endsIn, isDefault, type, ...others }) => {
  const cardIcons = {
    americanexpress: americanexpressIcon,
    discover: discoverIcon,
    mastercard: masterCardIcon,
    paypal: paypalIcon,
    visa: visaIcon,
  };

  const cardType = type.toLowerCase().replace(' ', '');

  return (
    <div
      className={classnames('atomikui-wallet-item', className, {
        'is-default': isDefault,
      })}
      {...others}
    >
      <img
        className="atomikui-wallet-item__icon"
        src={cardIcons[cardType]}
        alt={`${type} icon`}
      />
      <div className="atomikui-wallet-item__label">
        <b>{type}</b>
        <br />
        {endsIn}
      </div>
      {isDefault && <Icon icon={faCheckCircle} size="lg" color="#027abf" />}
    </div>
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
  type: PropTypes.oneOf([
    'Bank',
    'Visa',
    'MasterCard',
    'Discover',
    'American Express',
    'PayPal',
  ]),
};

WalletItem.defaultProps = {
  className: '',
  endsIn: '',
  isDefault: false,
  type: 'card',
};

export default WalletItem;
