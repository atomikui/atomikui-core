import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import americanexpressIcon from './images/americanexpress.png';
import amazonIcon from './images/amazon.png';
import dinersclubIcon from './images/dinersclub.png';
import jcbIcon from './images/jcb.png';
import masterCardIcon from './images/mastercard.png';
import maestroIcon from './images/maestro.png';
import discoverIcon from './images/discover.png';
import paypalIcon from './images/paypal.png';
import visaIcon from './images/visa.png';

const WalletItem = ({ className, endsIn, isDefault, type, ...others }) => {
  const cardIcons = {
    amazon: amazonIcon,
    americanexpress: americanexpressIcon,
    dinersclub: dinersclubIcon,
    discover: discoverIcon,
    jcb: jcbIcon,
    mastercard: masterCardIcon,
    maestro: maestroIcon,
    paypal: paypalIcon,
    visa: visaIcon,
  };

  const isCustomType = typeof type === 'object';

  const paymentType = isCustomType
    ? type.name
    : type.toLowerCase().replace(' ', '');

  const paymentLabel = isCustomType ? type.name : type;

  return (
    <div
      className={classnames('atomikui-wallet-item', className, {
        'is-default': isDefault,
      })}
      {...others}
    >
      <div className="atomikui-wallet-item__icon">
        {isCustomType ? (
          type.icon
        ) : (
          <img src={cardIcons[paymentType]} alt={`${paymentLabel} icon`} />
        )}
      </div>
      <div className="atomikui-wallet-item__label">
        <b>{paymentLabel}</b>
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
  type: PropTypes.oneOfType([
    PropTypes.oneOf([
      'Amazon',
      'American Express',
      'Bank',
      'Discover',
      'Diners Club',
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
  endsIn: '',
  isDefault: false,
  type: 'card',
};

export default WalletItem;
