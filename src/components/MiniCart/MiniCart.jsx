import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MiniCartItem from './components/MiniCartItem';
import Button from '../button';
import { getCartSubTotal } from '../cart/Cart';

const MiniCart = ({
  children,
  className,
  customButton,
  hideButton,
  onProceedToCart,
  onProceedToCartBtnColor,
  onProceedToCartBtnColorText,
  theme,
}) => (
  <div
    className={classnames('atomikui-mini-cart', className, {
      [`atomikui-mini-cart--${theme}`]: theme,
    })}
  >
    <div className="atomikui-mini-cart__bd">
      <Grid>
        <Row>
          <Col xs={8} sm={8} md={8} className="text-weight-bold">
            Item
          </Col>
          <Col
            xs={2}
            sm={2}
            md={2}
            className="text-align-center text-weight-bold"
          >
            Qty
          </Col>
          <Col
            xs={2}
            sm={2}
            md={2}
            className="text-align-right text-weight-bold"
          >
            Price
          </Col>
        </Row>
      </Grid>
      <div className="atomikui-mini-cart__items">{children}</div>
    </div>
    <div className="atomikui-mini-cart__subtotal">
      <div>Subtotal:</div>
      <div>
        {`$${getCartSubTotal(children).toLocaleString('en', {
          minimumFractionDigits: 2,
        })}`}
      </div>
    </div>
    {hideButton
      ? null
      : customButton || (
          <Button
            block
            shape="pill"
            size="md"
            theme={onProceedToCartBtnColor}
            onClick={onProceedToCart}
          >
            {onProceedToCartBtnColorText}
          </Button>
        )}
  </div>
);

MiniCart.propTypes = {
  /** Items to be rendered as cart items */
  children: PropTypes.node.isRequired,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Renders a custom button in place of default button */
  customButton: PropTypes.node,
  /** Hides the mini cart button */
  hideButton: PropTypes.bool,
  /** Callback triggered when "proceed to cart" button is clicked */
  onProceedToCart: PropTypes.func.isRequired,
  /** "Proceed to cart" button text */
  onProceedToCartBtnColorText: PropTypes.string,
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
  /** Color theme */
  theme: PropTypes.oneOf(['', 'light', 'dark']),
};

MiniCart.defaultProps = {
  className: '',
  customButton: null,
  hideButton: false,
  theme: '',
  onProceedToCartBtnColorText: 'proceed to checkout',
  onProceedToCartBtnColor: 'blue',
};

MiniCart.Item = MiniCartItem;

export default MiniCart;
