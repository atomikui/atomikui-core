import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Dropdown from '../../../dropdown';
import Button from '../../../button';

export const getQuantityOptions = (limit) =>
  [...Array(limit).keys()].map((i) => {
    const numberStr = (i + 1).toString();
    return { text: numberStr, value: numberStr };
  });

const CartItem = ({
  className,
  description,
  imageUrl,
  onQuantityChange,
  quantity,
  quantityLimit,
  price,
  ...others
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (newQuantity) => {
    setItemQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className={classnames('atomikui-cart__item', className)} {...others}>
      <div className="atomikui-cart__item__hd">
        <img
          className="atomikui-cart__item__image"
          src={imageUrl}
          alt="cart item"
        />
      </div>
      <div className="atomikui-cart__item__bd">
        <div className="atomikui-cart__item__info">
          <div className="atomikui-cart__item__description">{description}</div>
          <div className="atomikui-cart__item__quantity">
            <Dropdown
              data-test-id="cart-item-dropdown"
              className="atomikui-cart__item__dropdown"
              label="Qty"
              onChange={(e) => handleQuantityChange(+e.target.value)}
              value={String(itemQuantity)}
              options={getQuantityOptions(quantityLimit)}
            />
            <Button
              data-test-id="cart-item-delete-button"
              className="atomikui-cart__item__delete-btn"
              theme="hollow"
              onClick={() => handleQuantityChange(0)}
            >
              delete
            </Button>
          </div>
          <div className="atomikui-cart__item__price text-align-right@medium">
            <span className="atomikui-cart__item__label">Price:</span>{' '}
            <span className="atomikui-cart__item__value">{` $${price.toLocaleString(
              'en',
              { minimumFractionDigits: 2 },
            )}`}</span>
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
  /** Quanity limit */
  quantityLimit: PropTypes.number,
  /** The unit price of the cart item */
  price: PropTypes.number,
};

CartItem.defaultProps = {
  className: '',
  description: '',
  imageUrl: 'image-placeholder.png',
  onQuantityChange: null,
  quantity: 0,
  quantityLimit: 10,
  price: 0,
};

export default CartItem;
