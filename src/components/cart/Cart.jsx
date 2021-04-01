import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import CartItem from './components/cart-item';
import List from '../list';
import ListItem from '../list-item';
import cartSubTotal from '../../utilities/cartSubTotal';

const Cart = ({ className, children, title, ...others }) => (
  <div className={classnames('atomikui-cart', className)} {...others}>
    <div className="atomikui-cart__hd">{title}</div>
    <div className="atomikui-cart__bd">
      <List className="atomikui-cart__items">
        {Children.map(children, (child, index) => (
          <ListItem key={`item-${index + 1}`}>{child}</ListItem>
        ))}
      </List>
    </div>
    <div className="atomikui-cart__ft">
      <div className="atomikui-cart__subtotal">
        Subtotal:{' '}
        <span data-test-id="cart-subtotal" className="text-weight-semibold">
          $
          {cartSubTotal(children).toLocaleString('en', {
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  </div>
);

Cart.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Cart items */
  children: PropTypes.node,
  /** Cart title */
  title: PropTypes.string,
};

Cart.defaultProps = {
  className: '',
  children: null,
  title: 'Shopping Cart',
};

Cart.Item = CartItem;

export default Cart;
