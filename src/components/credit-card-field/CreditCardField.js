import React, { useState, useRef, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import FormField from '../form-field';
import Hint from '../hint';
import { List, ListItem } from '../list';

const CreditCardField = ({ className, fields, label, onChange, ...others }) => {
  const state = useState({
    number: '',
    expiry: '',
    cvc: '',
    zip: '',
  });

  const hasErrors = fields
    .map(({ hasError }) => {
      return hasError;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const handleChange = (e) => {
    onChange(state);
  };

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
          <div className="atomikui-credit-card-field__icon"></div>
          {fields.map(({ placeholder, fieldName, hasError }) => {
            return (
              <div
                key={shortid.generate()}
                className={`atomikui-credit-card-field__${fieldName}`}
              >
                <FormField
                  name={`cc_${fieldName}`}
                  placeholder={placeholder}
                  value={state.number}
                  hasError={hasError}
                  borderless
                />
              </div>
            );
          })}
        </div>
      </fieldset>
      {!!hasErrors && (
        <List>
          {fields.map(({ hasError, errorText }) => {
            return (
              <Fragment key={shortid.generate()}>
                {hasError && (
                  <ListItem>
                    <Hint type="error">{errorText}</Hint>
                  </ListItem>
                )}
              </Fragment>
            );
          })}
        </List>
      )}
    </>
  );
};

CreditCardField.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Form fields */
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      placeholder: PropTypes.string,
      fieldName: PropTypes.string,
      hasError: PropTypes.bool,
      errorText: PropTypes.string,
    }),
  ),
  /** Creditcard fieldset label */
  label: PropTypes.string,
  /** onChange callback */
  onChange: PropTypes.func,
};

CreditCardField.defaultProps = {
  className: '',
  fields: [
    {
      placeholder: 'Card Number',
      fieldName: 'cc_number',
      hasError: false,
      errorText: 'Card number is required',
    },
    {
      placeholder: 'Card Expiration',
      fieldName: 'cc_expiry',
      hasError: false,
      errorText: 'Card expiration date is required',
    },
    {
      placeholder: 'CVC',
      fieldName: 'cc_cvc',
      hasError: false,
      errorText: 'Card CVC is required',
    },
  ],
  label: '',
  onChange() {},
};

export default CreditCardField;
