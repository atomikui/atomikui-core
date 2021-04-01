import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import CartItem from './components/cart-item';
import List from '../list';
import ListItem from '../list-item';

const Cart = ({
  className,
  onCartItemUpdate,
  items,
  tax,
  title,
  ...others
}) => {
  const subtotal = items.reduce(
    (a, b) => (b.quantity > 0 ? (a + b.price) * b.quantity : a),
    0,
  );

  return (
    <div className={classnames('atomikui-cart', className)} {...others}>
      <div className="atomikui-cart__hd">
        {title}{' '}
        <span className="text-weight-normal">({items.length} Items)</span>
      </div>
      <div className="atomikui-cart__bd">
        <List className="atomikui-cart__items">
          {items.map(({ id, ...props }, index) => (
            <ListItem key={`item-${index + 1}`}>
              <CartItem
                onQuantityChange={(newQuantity) =>
                  onCartItemUpdate(newQuantity, id)
                }
                {...props}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="atomikui-cart__ft">
        <div className="atomikui-cart__subtotal">
          <span className="text-weight-semibold">Subtotal:</span> $
          {subtotal.toLocaleString('en', { minimumFractionDigits: 2 })}
        </div>
        {tax && (
          <div className="atomikui-cart__tax" data-test-id="cart-tax">
            <span className="text-weight-semibold">Sales Tax:</span> $
            {Number((subtotal * tax).toFixed(2)).toLocaleString('en', {
              minimumFractionDigits: 2,
            })}
          </div>
        )}
        <div className="atomikui-cart__total" data-test-id="cart-total">
          <span className="text-weight-semibold">Total:</span> $
          {Number((subtotal * tax + subtotal).toFixed(2)).toLocaleString('en', {
            minimumFractionDigits: 2,
          })}
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
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  tax: null,
  title: 'Shopping Cart',
};

export default Cart;
