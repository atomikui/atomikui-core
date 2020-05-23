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
});
