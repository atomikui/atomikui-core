import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import cardValidator from 'card-validator';
import FormField from '../form-field';
import creditCardIcons from './credit-card-icons';
import Hint from '../hint';
import List from '../list';
import ListItem from '../list-item';

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
  const [cardPreview, setCardPreview] = useState('5555');
  const [cardPreviewHidden, setCardPreviewhidden] = useState(false);
  const [cardFieldHidden, setCardFieldHidden] = useState('auto');
  const [cardIsValid, setCardIsValid] = useState(false);
  const [creditCardIsFocused, setCreditCardIsFocused] = useState(false);

  const creditCardRef = useRef();
  const cvcRef = useRef();
  const zipRef = useRef();

  const stripMask = (str) => str.replace(/(-|\/|_)/g, '');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'creditCardExpiry' && stripMask(value).length === 4) {
      cvcRef.current.focus();
    }

    if (name === 'creditCardCvc' && String(value).length === 3) {
      zipRef.current.focus();
    }

    onChange(name, value);
  };

  const onCreditCardFocus = () => {
    setCardFieldHidden(false);
    setCreditCardIsFocused(true);
  };

  const onCreditCardBlur = () => {
    if (cardIsValid) {
      setCardFieldHidden(true);
      setCardPreviewhidden(true);
    }
    setCreditCardIsFocused(false);
  };

  const enforceMaxLength = (e) => {
    const { value, maxLength } = e.target;
    if (value.length === +maxLength && e.keyCode !== 8) {
      e.preventDefault();
    }
  };

  const cardNumber = {
    id: 'credit-card-number',
    type: 'number',
    placeholder: 'Card Number',
    name: 'creditCardNumber',
    onChange: handleChange,
    value: creditCardNumber,
    pattern: '[0-9]*',
    ref: creditCardRef,
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
    type: 'number',
    placeholder: 'CVC',
    name: 'creditCardCvc',
    onChange: handleChange,
    value: creditCardCvc,
    pattern: '[0-9]*',
    ref: cvcRef,
  };

  const cardZip = {
    id: 'credit-card-zip',
    type: 'number',
    placeholder: 'ZIP',
    name: 'creditCardZip',
    onChange: handleChange,
    value: creditCardZip,
    pattern: '[0-9]*',
    ref: zipRef,
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
      setCardFieldHidden(isValid);
      setCardPreviewhidden(isValid);
      setCardPreview(isValid ? value.substr(-4) : '');
      onCardNumberChange(type, isValid);
    } catch (e) {
      setCardType('default');
      setCardIsValid(false);
      setCardFieldHidden(false);
      setCardPreviewhidden(false);
      setCardPreview('');
      onCardNumberChange('', false);
    }
  }, [creditCardNumber]);

  useEffect(() => {
    if (cardIsValid) {
      setTimeout(() => {
        creditCardRef.current.blur();
        document.querySelector('#credit-card-expiry').focus();
      }, 10);
    }
  }, [cardIsValid]);

  useEffect(() => {
    if (cardFieldHidden === false) {
      creditCardRef.current.focus();
      setCardPreviewhidden(false);
    }
  }, [cardFieldHidden]);

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
          <FormField
            {...cardNumber}
            data-test-id="credit-card-number"
            aria-label="Credit Card Number"
            className={classnames({
              'display-none': cardFieldHidden,
            })}
            maxLength={cardType === 'american-express' ? '25' : '26'}
            onFocus={onCreditCardFocus}
            onBlur={onCreditCardBlur}
            borderless
          />
          {cardPreviewHidden && (
            <button
              type="button"
              id="last-four-digits-btn"
              className="atomikui-credit-card-field__last-four-digits-btn"
              tabIndex="0"
              onFocus={() => setCardFieldHidden(false)}
            >
              {cardPreview}
            </button>
          )}
          <div
            className={classnames({
              'is-visibly-hidden':
                !cardIsValid ||
                (creditCardIsFocused && !errors.includes('creditCardExpiry')),
            })}
          >
            <FormField
              data-test-id="credit-card-expiry"
              aria-label="Expiration Date"
              {...cardExpiry}
              mask="99/99"
              borderless
            />
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
                <FormField
                  {...cardCvc}
                  data-test-id="credit-card-cvc"
                  aria-label="CVC"
                  maxLength="3"
                  onKeyDown={enforceMaxLength}
                  borderless
                />
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
                <FormField
                  {...cardZip}
                  data-test-id="credit-card-zip"
                  aria-label="ZIP Code"
                  maxLength="5"
                  onKeyDown={enforceMaxLength}
                  borderless
                />
              </div>
            </>
          )}
        </div>
      </fieldset>
      {!!errors.length && (
        <div className="margin-top-2">
          <List>
            {errors.map((field, index) => (
              <ListItem key={`list-item-${index + 1}`}>
                <Hint type="error">{errorMessages[field]}</Hint>
              </ListItem>
            ))}
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
  errors: PropTypes.arrayOf(PropTypes.string),
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
