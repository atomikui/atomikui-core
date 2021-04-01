import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faUniversity,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';

// icons
import AmazonPayIcon from './images/amazonpay.svg';
import AmericanExpressIcon from './images/americanexpress.svg';
import ApplePay from './images/applepay.svg';
import DinersClubIcon from './images/dinersclub.svg';
import GooglePay from './images/googlepay.svg';
import JcbIcon from './images/jcb.svg';
import MasterCardIcon from './images/mastercard.svg';
import MaestroIcon from './images/maestro.svg';
import DiscoverIcon from './images/discover.svg';
import PayPalIcon from './images/paypal.svg';
import VisaIcon from './images/visa.svg';

const WalletItem = ({
  className,
  endsIn,
  expiry,
  isSelected,
  onSelect,
  type,
  ...others
}) => {
  const cardIcons = {
    amazonpay: <AmazonPayIcon />,
    americanexpress: <AmericanExpressIcon />,
    applepay: <ApplePay />,
    dinersclub: <DinersClubIcon />,
    discover: <DiscoverIcon />,
    googlepay: <GooglePay />,
    jcb: <JcbIcon />,
    mastercard: <MasterCardIcon />,
    maestro: <MaestroIcon />,
    paypal: <PayPalIcon />,
    visa: <VisaIcon />,
  };

  const isCustomType = typeof type === 'object';

  const paymentType = isCustomType
    ? type.name
    : type.toLowerCase().replace(' ', '');

  const paymentLabel = isCustomType ? type.name : type;

  const icon =
    type === 'Bank' ? (
      <Icon icon={faUniversity} size="3x" color="#444444" />
    ) : (
      cardIcons[paymentType] || (
        <Icon
          data-test-id="wallet-item-icon"
          className="atomikui-wallet__item__default-icon"
          icon={faCreditCard}
          size="3x"
          color="#444444"
        />
      )
    );

  return (
    <button
      className={classnames('atomikui-wallet__item', className, {
        'is-selected': isSelected,
      })}
      onClick={onSelect}
      {...others}
    >
      <div className="atomikui-wallet__item__icon">
        {isCustomType ? type.icon : icon}
      </div>
      <div className="atomikui-wallet__item__label">
        <div
          className="atomikui-wallet__item__label-text"
          data-test-id="wallet-item-label-text"
        >
          {paymentLabel}
        </div>
        <div className="atomikui-wallet__item__info">
          {endsIn && (
            <>
              <span>**** **** ****</span> {endsIn}
            </>
          )}
          {expiry && (
            <>
              <br />
              Valid Thru: {expiry}
            </>
          )}
        </div>
      </div>
      {isSelected && (
        <Icon
          className="atomikui-wallet__item__selected-icon"
          icon={faCheckCircle}
          size="lg"
          color="#027abf"
        />
      )}
    </button>
  );
};

WalletItem.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Last 4 digits od account number */
  endsIn: PropTypes.string,
  /** Expiration Date */
  expiry: PropTypes.string,
  /** Sets payment method as default */
  isSelected: PropTypes.bool,
  /** Callback triggered when item WalletItem is selected */
  onSelect: PropTypes.func,
  /** Payment method type */
  type: PropTypes.oneOfType([
    PropTypes.oneOf([
      'Amazon Pay',
      'American Express',
      'Apple Pay',
      'Bank',
      'Discover',
      'Diners Club',
      'Google Pay',
      'JCB',
      'MasterCard',
      'Maestro',
      'PayPal',
      'Visa',
    ]),
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.node,
    }),
  ]),
};

WalletItem.defaultProps = {
  className: '',
  endsIn: null,
  expiry: null,
  isSelected: false,
  onSelect: null,
  type: 'Card',
};

export default WalletItem;
