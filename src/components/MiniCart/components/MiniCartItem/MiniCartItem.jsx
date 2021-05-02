import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

const MiniCartItem = ({ title, quantity, price }) => (
  <div className="atomikui-mini-cart-item">
    <Grid>
      <Row>
        <Col xs={6} sm={6} md={10}>
          {title}
        </Col>
        <Col xs={6} sm={6} md={2} className="text-align-right">
          {quantity}
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
