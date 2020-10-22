import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import CartItem from './CartItem';

configure({ adapter: new Adapter() });

describe('<CartItem />', () => {
  let cartItem;
  let onQuantityChangeSpy;

  beforeEach(() => {
    onQuantityChangeSpy = sinon.spy();

    cartItem = mount(
      <CartItem
        imageUrl="product-les-paul.jpg"
        description="Gibson - 60th Anniversary 1960 Les Paul Standard - Deep Cherry Sunburst"
        quantity={1}
        onQuantityChange={onQuantityChangeSpy}
        price={6499.99}
      />,
    );
  });

  it('Should trigger onQuantityChange when quantity is updated', () => {
    cartItem
      .find('input[data-test-id="cart-item-qty"]')
      .simulate('change', { target: { value: 2 } });
    expect(onQuantityChangeSpy.withArgs(2).called).toBeTruthy();
  });
});
