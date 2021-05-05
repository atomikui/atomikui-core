import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

const MiniCartItem = ({ title, quantity, price }) => (
  <div className="atomikui-mini-cart-item">
    <Grid>
      <Row>
        <Col xs={8} sm={8} md={8}>
          {title}
        </Col>
        <Col xs={2} sm={2} md={2} className="text-align-center">
          {quantity}
        </Col>
        <Col xs={2} sm={2} md={2} className="text-align-right">
          $
          {price.toLocaleString('en', {
            minimumFractionDigits: 2,
          })}
        </Col>
      </Row>
    </Grid>
  </div>
);

MiniCartItem.propTypes = {
  /** Cart item title text */
  title: PropTypes.string.isRequired,
  /** Cart item quantity */
  quantity: PropTypes.number.isRequired,
  /** Cart item price */
  price: PropTypes.number.isRequired,
};

export default MiniCartItem;
