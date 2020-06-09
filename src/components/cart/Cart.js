import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import CartItem from '../cart-item';
import { List, ListItem } from '../list';

const Cart = ({
  className,
  onCartItemUpdate,
  items,
  tax,
  title,
  ...others
}) => {
  const subtotal = items.reduce((a, b) => {
    return (a + b.price) * b.quantity;
  }, 0);

  return (
    <div className={classnames('atomikui-cart', className)} {...others}>
      <div className="atomikui-cart__hd">
        {title}{' '}
        <span className="text-weight-normal">({items.length} Items)</span>
      </div>
      <div className="atomikui-cart__bd">
        <List className="atomikui-cart__items">
          {items.map((props, index) => {
            return (
              <ListItem key={shortid.generate()}>
                <CartItem
                  key={shortid.generate()}
                  onQuantityChange={(newQuantity) => {
                    return onCartItemUpdate(newQuantity, index);
                  }}
                  {...props}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
      <div className="atomikui-cart__ft">
        <div>
          <span className="text-weight-semibold">Subtotal:</span> $
          {subtotal.toFixed(2).toLocaleString('en')}
        </div>
        <div>
          <span className="text-weight-semibold">Sales Tax:</span> $
          {(subtotal * tax).toFixed(2).toLocaleString('en')}
        </div>
        <div className="atomikui-cart__total">
          <span className="text-weight-semibold">Total:</span> $
          {(subtotal * tax + subtotal).toFixed(2).toLocaleString('en')}
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Cart items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      description: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
    }),
  ),
  /** Cart item update callback */
  onCartItemUpdate: PropTypes.func,
  /** Sales tax percentage */
  tax: PropTypes.number,
  /** Cart title */
  title: PropTypes.string,
};

Cart.defaultProps = {
  className: '',
  items: [],
  onCartItemUpdate: null,
  tax: 0,
  title: 'Shopping Cart',
};

export default Cart;
