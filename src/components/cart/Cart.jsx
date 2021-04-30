import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import CartItem from './components/cart-item';
import List from '../list';
import Statistic from '../statistic';
import Button from '../button';

export const getCartSubTotal = (items) =>
  items.reduce(
    (a, b) => (b.props.quantity > 0 ? b.props.price * b.props.quantity + a : a),
    0,
  );

export const getCartQuantity = (items) =>
  items.reduce((a, b) => b.props.quantity + a, 0);

const Cart = ({
  className,
  children,
  onProceedToCart,
  onProceedToCartBtnColor,
  title,
  ...others
}) => (
  <div className={classnames('atomikui-cart', className)} {...others}>
    <div className="atomikui-cart__hd">
      <span>{title}</span>
      <Statistic
        data-test-id="cart-subtotal"
        value={`$${getCartSubTotal(children).toLocaleString('en', {
          minimumFractionDigits: 2,
        })}`}
        label={`Subtotal (${getCartQuantity(children)} Items)`}
        size="sm"
        topLabel
      />
    </div>
    <div className="atomikui-cart__bd">
      {children.length ? (
        <List className="atomikui-cart__items">
          {Children.map(children, (child, index) => (
            <List.Item key={`item-${index + 1}`}>{child}</List.Item>
          ))}
        </List>
      ) : (
        <div
          data-test-id="empty-cart"
          className="padding-top-8 padding-bottom-8"
        >
          Your cart is empty
        </div>
      )}
    </div>
    <div className="atomikui-cart__ft">
      <Button
        data-test-id="proceed-to-cart"
        onClick={onProceedToCart}
        theme={onProceedToCartBtnColor}
        shape="pill"
        block
      >
        Proceed to Checkout
      </Button>
    </div>
  </div>
);

Cart.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Cart items */
  children: PropTypes.node,
  /** Callback triggered when "proceed to cart" button is clicked */
  onProceedToCart: PropTypes.func,
  /** "Proceed to cart" button color */
  onProceedToCartBtnColor: PropTypes.oneOf([
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'sky-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'light-orange',
    'orange',
    'deep-orange',
    'amber',
    'brown',
    'gray',
    'blue-gray',
    'black',
    'white',
    'hollow',
    'link',
    'block',
  ]),
  /** Cart title */
  title: PropTypes.string,
};

Cart.defaultProps = {
  className: '',
  children: null,
  onProceedToCart: null,
  onProceedToCartBtnColor: 'blue',
  title: 'Shopping Cart',
};

Cart.Item = CartItem;

export default Cart;
