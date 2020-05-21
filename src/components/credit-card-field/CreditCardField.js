import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import cardValidator from 'card-validator';
import FormField from '../form-field';
import Hint from '../hint';
import { List, ListItem } from '../list';
import creditCardIcons from './credit-card-icons';

const CreditCardField = ({
  className,
  creditCardExpiry,
  creditCardNumber,
  creditCardCvc,
  creditCardZip,
  hideCvc,
  hideZip,
  label,
  onCardNumberChange,
  onChange,
  ...others
}) => {
  const [cardType, setCardType] = useState(null);

  const [mask, setMask] = useState(null);

  const stripMask = (str) => {
    return str.replace(/(-|_)/g, '');
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };

  const cardNumber = {
    id: 'credit-card-number',
    placeholder: 'Card Number',
    name: 'creditCardNumber',
    onChange: handleChange,
    hasError: false,
    value: creditCardNumber,
    'data-error-message': 'Card number is required',
  };

  const cardExpiry = {
    id: 'credit-card-expiry',
    placeholder: 'Expires',
    name: 'creditCardExpiry',
    onChange: handleChange,
    value: creditCardExpiry,
    hasError: false,
    'data-error-message': 'Card expiration date is required',
  };

  const cardCvc = {
    id: 'credit-card-cvc',
    placeholder: 'CVC',
    name: 'creditCardCvc',
    onChange: handleChange,
    value: creditCardCvc,
    hasError: false,
    'data-error-message': 'Card CVC is required',
  };

  const cardZip = {
    id: 'credit-card-zip',
    placeholder: 'ZIP',
    name: 'creditCardZip',
    onChange: handleChange,
    value: creditCardZip,
    hasError: false,
    'data-error-message': 'ZIP code is required',
  };

  const hasErrors = [
    cardNumber.hasError,
    cardExpiry.hasError,
    cardCvc.hasError,
    cardZip.hasError,
  ].reduce((a, b) => {
    return a + b;
  }, 0);

  useEffect(() => {
    const validatedCard = cardValidator.number(stripMask(creditCardNumber));

    try {
      setCardType(validatedCard.card.type);
      onCardNumberChange(validatedCard.isValid, validatedCard.card.type);
      setMask(
        validatedCard.card.type === 'american-express'
          ? '9999-9999-9999-999'
          : '9999-9999-9999-9999',
      );
    } catch (e) {
      setCardType('default');
      onCardNumberChange(false, '');
      setMask('9999-9999-9999-9999');
    }
  }, [creditCardNumber]);

  return (
    <>
      <fieldset
        className={classnames('atomikui-credit-card-field', className, {
          'has-error': hasErrors,
        })}
        {...others}
      >
        <legend className="atomikui-label">{label}</legend>
        <div className="atomikui-credit-card-field__fields">
          {creditCardIcons[cardType]}
          <FormField
            {...cardNumber}
            mask={mask}
            maxLength={cardType === 'american-express' ? '25' : '26'}
            style={{ width: '182px' }}
            borderless
          />
          <FormField
            {...cardExpiry}
            mask="99/99"
            borderless
            style={{ width: '70px' }}
            disabled
          />
          {!hideCvc && (
            <FormField
              {...cardCvc}
              style={{ width: '55px' }}
              borderless
              disabled
            />
          )}
          {!hideZip && (
            <FormField
              {...cardZip}
              style={{ width: '65px' }}
              borderless
              disabled
            />
          )}
        </div>
      </fieldset>
      {!!hasErrors && (
        <List>
          <>
            {cardNumber.hasError && (
              <ListItem>
                <Hint type="error">{cardNumber['data-error-message']}</Hint>
              </ListItem>
            )}
            {cardExpiry.hasError && (
              <ListItem>
                <Hint type="error">{cardExpiry['data-error-message']}</Hint>
              </ListItem>
            )}
            {cardCvc.hasError && (
              <ListItem>
                <Hint type="error">{cardCvc['data-error-message']}</Hint>
              </ListItem>
            )}
            {cardZip.hasError && (
              <ListItem>
                <Hint type="error">{cardZip['data-error-message']}</Hint>
              </ListItem>
            )}
          </>
        </List>
      )}
    </>
  );
};

CreditCardField.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Credit card expiration date value */
  creditCardExpiry: PropTypes.string,
  /** Credit card number value */
  creditCardNumber: PropTypes.string,
  /** Credit card CVC value */
  creditCardCvc: PropTypes.string,
  /** Credit card ZIP code value */
  creditCardZip: PropTypes.string,
  /** Hides the CVC field */
  hideCvc: PropTypes.bool,
  /** Hides the ZIP code field */
  hideZip: PropTypes.bool,
  /** Credit card fieldset label */
  label: PropTypes.string,
  /** Callback after card number changes */
  onCardNumberChange: PropTypes.func,
  /** onChange callback */
  onChange: PropTypes.func,
};

CreditCardField.defaultProps = {
  className: '',
  creditCardExpiry: '',
  creditCardNumber: '',
  creditCardCvc: '',
  creditCardZip: '',
  hideCvc: false,
  hideZip: false,
  label: '',
  onCardNumberChange() {},
  onChange() {},
};

export default CreditCardField;
