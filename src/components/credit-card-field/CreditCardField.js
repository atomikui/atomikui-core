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
  const [creditCardFieldWidth, setCreditCardFieldWidth] = useState('auto');
  const [cardIsValid, setCardIsValid] = useState(false);
  const [creditCardIsFocused, setCreditCardIsFocused] = useState(false);
  const [mask, setMask] = useState(null);

  const minCreditCardFieldWidth = '53px';

  const stripMask = (str) => {
    return str.replace(/(-|\/|_)/g, '');
  };

  const handleChange = (event) => {
    onChange(event.target.name, event.target.value);
  };

  const handleExpiryChange = (value) => {
    if (stripMask(value).length === 4) {
      document.querySelector('#credit-card-cvc').focus();
    }
  };

  const handleCvcChange = (value) => {
    if (String(value).length === 3) {
      document.querySelector('#credit-card-zip').focus();
    }
  };

  const onCreditCardFocus = () => {
    setCreditCardFieldWidth('auto');
    setCreditCardIsFocused(true);
  };

  const onCreditCardBlur = () => {
    if (cardIsValid) {
      setCreditCardFieldWidth(minCreditCardFieldWidth);
    }
    setCreditCardIsFocused(false);
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
    const value = stripMask(creditCardNumber);
    const validatedCard = cardValidator.number(value);

    if (!value) {
      onChange('creditCardExpiry', '');
      onChange('creditCardCvc', '');
      onChange('creditCardZip', '');
    }

    try {
      const { type } = validatedCard.card;
      const { isValid } = validatedCard;

      setCardType(type);
      onCardNumberChange(type, isValid);
      setCardIsValid(isValid);
      setCreditCardFieldWidth(isValid ? minCreditCardFieldWidth : 'auto');
      setMask(
        validatedCard.card.type === 'american-express'
          ? '9999-9999-9999-999'
          : '9999-9999-9999-9999',
      );
    } catch (e) {
      setCardType('default');
      onCardNumberChange(false, '');
      setCardIsValid(false);
      setCreditCardFieldWidth('auto');
      setMask('9999-9999-9999-9999');
    }
  }, [creditCardNumber]);

  useEffect(() => {
    if (cardIsValid) {
      setTimeout(() => {
        document.querySelector('#credit-card-number').blur();
        document.querySelector('#credit-card-expiry').focus();
      }, 10);
    }
  }, [cardIsValid]);

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
          <label>Credit Card Number</label>
          <FormField
            {...cardNumber}
            mask={mask}
            maxLength={cardType === 'american-express' ? '25' : '26'}
            style={{ width: creditCardFieldWidth }}
            onFocus={onCreditCardFocus}
            onBlur={onCreditCardBlur}
            borderless
          />
          {cardIsValid && !creditCardIsFocused && (
            <>
              <label>Expiration Date</label>
              <FormField
                {...cardExpiry}
                mask="99/99"
                onKeyUp={(e) => {
                  return handleExpiryChange(e.target.value);
                }}
                borderless
              />
              {!hideCvc && (
                <>
                  <label>CVC</label>
                  <FormField
                    {...cardCvc}
                    onKeyUp={(e) => {
                      return handleCvcChange(e.target.value);
                    }}
                    maxLength="3"
                    borderless
                  />
                </>
              )}
              {!hideZip && (
                <>
                  <label>ZIP Code</label>
                  <FormField {...cardZip} maxLength="5" borderless />
                </>
              )}
            </>
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
