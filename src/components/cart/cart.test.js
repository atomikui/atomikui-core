import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Cart, { getCartQuantity, getCartSubTotal } from './Cart';

configure({ adapter: new Adapter() });

describe('<Cart />', () => {
  let cart;
  let onCartItemUpdateSpy;

  beforeEach(() => {
    onCartItemUpdateSpy = sinon.spy();

    cart = mount(
      <Cart title="Your Cart">
        <Cart.Item
          id="1"
          imageUrl="product-les-paul.jpg"
          description="Gibson 60th Anniversary 1960 Les Paul Standard - Deep Cherry Sunburst"
          quantity={1}
          price={6499.99}
          onQuantityChange={onCartItemUpdateSpy}
        />
        <Cart.Item
          id="2"
          imageUrl="gibson-honey-burst.jpg"
          description="Gibson Les Paul Classic Electric Guitar - Honeyburst"
          quantity={1}
          price={1999.99}
          onQuantityChange={onCartItemUpdateSpy}
        />
      </Cart>,
    );
  });

  it('Should calculate subtotal', () => {
    expect(cart.find('[data-test-id="cart-subtotal"]').text()).toBe(
      '$8,499.98',
    );
  });

  it('Should trigger onCartItemUpdate whencart item is updated', () => {
    cart
      .find('select')
      .first()
      .simulate('change', { target: { value: 2 } });
    expect(onCartItemUpdateSpy.withArgs(2).called).toBeTruthy();
  });

  it('should calculate cart quanity', () => {
    const items = [<Cart.Item quantity={2} />, <Cart.Item quantity={3} />];
    expect(getCartQuantity(items)).toEqual(5);
  });
  it('should calculate cart quanity', () => {
    const items = [
      <Cart.Item quantity={1} price={5.55} />,
      <Cart.Item quantity={1} price={3.75} />,
    ];
    expect(getCartSubTotal(items)).toEqual(9.3);
  });

  it('Should show empty cart message if no items', () => {
    cart.setProps({ children: [] });
    expect(cart.find('[data-test-id="empty-cart"]')).toHaveLength(1);
  });
});
