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

  it('Should set the width of the credit card number field when focused or blurred', () => {
    creditCardField.find('input#credit-card-number').simulate('focus');

    expect(
      creditCardField.find('input#credit-card-number').prop('style').width,
    ).toBe('auto');

    creditCardField.find('input#credit-card-number').simulate('blur');

    expect(
      creditCardField.find('input#credit-card-number').prop('style').width,
    ).toBe('53px');
  });
});
