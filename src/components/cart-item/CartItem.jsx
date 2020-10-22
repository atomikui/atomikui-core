import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import FormField from '../form-field';

const CartItem = ({
  className,
  description,
  imageUrl,
  onQuantityChange,
  quantity,
  price,
  ...others
}) => {
  const [total, setTotal] = useState(price * quantity);
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (newQuantity) => {
    setItemQuantity(newQuantity);
    onQuantityChange(newQuantity);
    setTotal(price * itemQuantity);
  };

  const quantityLabel = `qty-${shortid.generate()}`;

  return (
    <div className={classnames('atomikui-cart-item', className)} {...others}>
      <div className="atomikui-cart-item__hd">
        <img
          className="atomikui-cart-item__image"
          src={imageUrl}
          alt="cart item"
        />
      </div>
      <div className="atomikui-cart-item__bd">
        <div className="atomikui-cart-item__info">
          <div className="atomikui-cart-item__description">{description}</div>
          <div>
            <div id={quantityLabel} className="atomikui-cart-item__label">
              Qty:
            </div>
            <FormField
              data-test-id="cart-item-qty"
              type="number"
              className="atomikui-cart-item__quantity"
              value={String(itemQuantity)}
              placeholder="Qty"
              aria-labelledby={quantityLabel}
              onChange={(e) => {
                return handleQuantityChange(+e.target.value);
              }}
            />
          </div>
          <div>
            <div className="atomikui-cart-item__label">Price:</div>
            <div className="atomikui-cart-item__value">{` $${price.toLocaleString(
              'en',
              { minimumFractionDigits: 2 },
            )}`}</div>
          </div>
          <div>
            <div className="atomikui-cart-item__label">Total:</div>
            <div className="atomikui-cart-item__value">{` $${total.toLocaleString(
              'en',
              { minimumFractionDigits: 2 },
            )}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Cart item description */
  description: PropTypes.string,
  /** Cart item image */
  imageUrl: PropTypes.string,
  /** calback triggered  on quantity change */
  onQuantityChange: PropTypes.func,
  /** Cart item quantity */
  quantity: PropTypes.number,
  /** The unit price of the cart item */
  price: PropTypes.number,
};

CartItem.defaultProps = {
  className: '',
  description: '',
  imageUrl: 'image-placeholder.png',
  onQuantityChange: null,
  quantity: 0,
  price: 0,
};

export default CartItem;
