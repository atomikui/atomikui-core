import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Cart from './Cart';

configure({ adapter: new Adapter() });

describe('<Cart />', () => {
  let cart;
  let onCartItemUpdateSpy;

  beforeEach(() => {
    onCartItemUpdateSpy = sinon.spy();

    cart = mount(
      <Cart
        title="Your Cart"
        tax={0.08}
        items={[
          {
            id: 1,
            imageUrl: 'product-les-paul.jpg',
            description:
              'Gibson 60th Anniversary 1960 Les Paul Standard - Deep Cherry Sunburst',
            quantity: 1,
            price: 6499.99,
          },
          {
            id: 2,
            imageUrl: 'gibson-honey-burst.jpg',
            description: 'Gibson Les Paul Classic Electric Guitar - Honeyburst',
            quantity: 1,
            price: 1999.99,
          },
        ]}
        onCartItemUpdate={onCartItemUpdateSpy}
      />,
    );
  });

  it('Should calculate subtotal', () => {
    expect(cart.find('[data-test-id="cart-total"]').text()).toBe(
      'Total: $9,179.98',
    );
  });

  it('Should trigger onCartItemUpdate whencart item is updated', () => {
    cart
      .find('input')
      .first()
      .simulate('change', { target: { value: 2 } });

    expect(onCartItemUpdateSpy.withArgs(2, 1).called).toBeTruthy();
  });

  it('Should conditionally render tax', () => {
    cart.setProps({ tax: null });
    expect(cart.find('[data-test-id="cart-tax"]')).toHaveLength(0);
  });
});
