import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
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
  const [total, setToal] = useState(0);

  useEffect(() => {
    setToal(price * quantity);
  }, [quantity]);

  return (
    <table className={classnames('atomikui-cart-item', className)} {...others}>
      <tbody>
        <tr>
          <td className="display-none display-table-cell@medium">
            <img
              className="atomikui-cart-item__image"
              src={imageUrl}
              alt="product image"
            />
          </td>
          <td>
            <span className="atomikui-cart-item__description">
              {description}
            </span>
          </td>
          <td>
            <FormField
              type="number"
              className="atomikui-cart-item__quantity"
              value={String(quantity)}
              placeholder="Qty"
              onChange={(e) => {
                return onQuantityChange(+e.target.value);
              }}
            />
          </td>
          <td>${price.toLocaleString('en')}</td>
          <td>${total.toLocaleString('en')}</td>
        </tr>
      </tbody>
    </table>
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
