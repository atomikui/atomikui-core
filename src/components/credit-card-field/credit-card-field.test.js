import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { configure, mount } from 'enzyme';
import CreditCardField from './CreditCardField';

configure({ adapter: new Adapter() });

describe('<CreditCardField />', () => {
  let creditCardField;
  let onchangeSpy;
  let onCardNumberChangeSpy;

  beforeEach(() => {
    onchangeSpy = sinon.spy();
    onCardNumberChangeSpy = sinon.spy();

    creditCardField = mount(
      <CreditCardField
        label="Credit Card Information"
        creditCardNumber="6011111111111117"
        creditCardExpiry="06/22"
        creditCardCvc="123"
        creditCardZip="60068"
        onChange={onchangeSpy}
        onCardNumberChange={onCardNumberChangeSpy}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(creditCardField.length).toBe(1);
  });

  it('Should set the value of the credit card number field', () => {
    expect(creditCardField.find('input#credit-card-number').prop('value')).toBe(
      '6011111111111117',
    );
  });

  it('Should set the value of the credit card expiration field', () => {
    expect(creditCardField.find('input#credit-card-expiry').prop('value')).toBe(
      '06/22',
    );
  });

  it('Should set the value of the credit card CVC field', () => {
    expect(creditCardField.find('input#credit-card-cvc').prop('value')).toBe(
      '123',
    );
  });

  it('Should set the value of the credit card ZIP code field', () => {
    expect(creditCardField.find('input#credit-card-zip').prop('value')).toBe(
      '60068',
    );
  });

  it('Should trigger callbacks', () => {
    creditCardField
      .find('input#credit-card-number')
      .simulate('change', { target: { value: '5105105105105100' } });

    expect(onchangeSpy.called).toBe(true);
    expect(onCardNumberChangeSpy.called).toBe(true);
  });
});
