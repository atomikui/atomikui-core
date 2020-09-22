import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import numeral from 'numeral';

const Price = ({
  amount,
  className,
  currencySymbol,
  label,
  size,
  theme,
  themeVariant,
  ...others
}) => {
  return (
    <span
      className={classnames('atomikui-price', className, {
        [`atomikui-price--${size}`]: size,
        [`atomikui-price--${theme}${
          themeVariant ? `-${themeVariant}` : ''
        }`]: theme,
      })}
      {...others}
    >
      <span className="atomikui-price__currency">{currencySymbol}</span>
      <span className="atomikui-price__amount">
        {numeral(amount).format(`0,0[.]00`)}
      </span>
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
  /** Specifies the color variation. */
  theme: PropTypes.oneOf([
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
  ]),
  /** The theme color variant */
  themeVariant: PropTypes.oneOf(['light']),
};

Price.defaultProps = {
  className: '',
  currencySymbol: '$',
  amount: 0,
  label: '',
  size: null,
  theme: null,
};

export default Price;
