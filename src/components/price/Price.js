import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Price = ({
  amount,
  className,
  currencySymbol,
  label,
  size,
  ...others
}) => {
  return (
    <span
      className={classnames('atomikui-price', className, {
        [`atomikui-price--${size}`]: size,
      })}
      {...others}
    >
      <span className="atomikui-price__currency">{currencySymbol}</span>
      <span className="atomikui-price__amount">{amount}</span>
      <span className="atomikui-price__label">{label}</span>
    </span>
  );
};

Price.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** currency symbol */
  currencySymbol: PropTypes.string,
  /** The amount */
  amount: PropTypes.number,
  /** label that comes after the amount */
  label: PropTypes.string,
  /** Specifies the price size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

Price.defaultProps = {
  className: '',
  currencySymbol: '$',
  amount: 0,
  label: '',
  size: null,
};

export default Price;
