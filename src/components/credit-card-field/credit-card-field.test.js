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

  test.each([
    ['input#credit-card-number', '6011111111111117'],
    ['input#credit-card-expiry', '06/22'],
    ['input#credit-card-cvc', '123'],
    ['input#credit-card-zip', '60068'],
  ])('Should set the value of %p as %p', (id, value) => {
    expect(creditCardField.find(id).prop('value')).toBe(value);
  });

  it('Should trigger callbacks', () => {
    creditCardField
      .find('input#credit-card-number')
      .simulate('change', { target: { value: '5105105105105100' } });

    expect(onchangeSpy.called).toBe(true);
    expect(onCardNumberChangeSpy.called).toBe(true);
  });

  it('Should show the credit card field when 4 digit preview is clicked', () => {
    expect(
      creditCardField.find('input#credit-card-number').hasClass('display-none'),
    ).toBe(true);

    creditCardField.find('#last-four-digits-btn').simulate('focus');

    expect(
      creditCardField.find('input#credit-card-number').hasClass('display-none'),
    ).toBe(false);
  });

  it('Should hide the credit card field when field is blurred', () => {
    creditCardField.find('#last-four-digits-btn').simulate('focus');
    creditCardField.find('input#credit-card-number').simulate('blur');

    expect(
      creditCardField.find('input#credit-card-number').hasClass('display-none'),
    ).toBe(true);
  });

  it('Should enforce max values', () => {});

  it('Should clear all fields if credit card number is deleted', () => {});
});
