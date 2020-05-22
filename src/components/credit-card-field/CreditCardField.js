import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import cardValidator from 'card-validator';
import FormField from '../form-field';
import creditCardIcons from './credit-card-icons';
import Hint from '../hint';
import { List, ListItem } from '../list';

const CreditCardField = ({
  className,
  creditCardExpiry,
  creditCardNumber,
  creditCardCvc,
  creditCardZip,
  errors,
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

  const minCreditCardFieldWidth = '53px';

  const stripMask = (str) => {
    return str.replace(/(-|\/|_)/g, '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'creditCardExpiry' && stripMask(value).length === 4) {
      document.querySelector('#credit-card-cvc').focus();
    }

    if (name === 'creditCardCvc' && String(value).length === 3) {
      document.querySelector('#credit-card-zip').focus();
    }

    onChange(name, value);
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
    value: creditCardNumber,
  };

  const cardExpiry = {
    id: 'credit-card-expiry',
    placeholder: 'Expires',
    name: 'creditCardExpiry',
    onChange: handleChange,
    value: creditCardExpiry,
  };

  const cardCvc = {
    id: 'credit-card-cvc',
    placeholder: 'CVC',
    name: 'creditCardCvc',
    onChange: handleChange,
    value: creditCardCvc,
  };

  const cardZip = {
    id: 'credit-card-zip',
    placeholder: 'ZIP',
    name: 'creditCardZip',
    onChange: handleChange,
    value: creditCardZip,
  };

  const errorMessages = {
    creditCardNumber: 'Please enter a valid credit card',
    creditCardExpiry: 'Please enter card expiration date',
    creditCardCvc: 'Please enter card CVC',
    creditCardZip: 'Please enter the ZIP code associeted with the card',
  };

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
      setCardIsValid(isValid);
      setCreditCardFieldWidth(isValid ? minCreditCardFieldWidth : 'auto');
      onCardNumberChange(type, isValid);
    } catch (e) {
      setCardType('default');
      setCardIsValid(false);
      setCreditCardFieldWidth('auto');
      onCardNumberChange(false, '');
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
          'has-error': errors.length,
        })}
        {...others}
      >
        <legend className="atomikui-label">{label}</legend>
        <div className="atomikui-credit-card-field__fields">
          {creditCardIcons[cardType]}
          <label>Credit Card Number</label>
          <FormField
            {...cardNumber}
            maxLength={cardType === 'american-express' ? '25' : '26'}
            style={{ width: creditCardFieldWidth }}
            onFocus={onCreditCardFocus}
            onBlur={onCreditCardBlur}
            borderless
          />
          <div
            className={classnames({
              'is-visibly-hidden':
                !cardIsValid ||
                (creditCardIsFocused && !errors.includes('creditCardExpiry')),
            })}
          >
            <label>Expiration Date</label>
            <FormField {...cardExpiry} mask="99/99" borderless />
          </div>
          {!hideCvc && (
            <>
              <div
                className={classnames({
                  'is-visibly-hidden':
                    !cardIsValid ||
                    (creditCardIsFocused && !errors.includes('creditCardCvc')),
                })}
              >
                <label>CVC</label>
                <FormField {...cardCvc} maxLength="3" borderless />
              </div>
            </>
          )}
          {!hideZip && (
            <>
              <div
                className={classnames({
                  'is-visibly-hidden':
                    !cardIsValid ||
                    (creditCardIsFocused && !errors.includes('creditCardZip')),
                })}
              >
                <label>ZIP Code</label>
                <FormField {...cardZip} maxLength="5" borderless />
              </div>
            </>
          )}
        </div>
      </fieldset>
      {!!errors.length && (
        <div className="margin-top-2">
          <List>
            {errors.map((field) => {
              return (
                <ListItem>
                  <Hint type="error">{errorMessages[field]}</Hint>
                </ListItem>
              );
            })}
          </List>
        </div>
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
  /** Errors */
  errors: PropTypes.array,
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
  errors: [],
  hideCvc: false,
  hideZip: false,
  label: '',
  onCardNumberChange() {},
  onChange() {},
};

export default CreditCardField;
