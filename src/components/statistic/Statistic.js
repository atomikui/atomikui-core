import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const Statistic = ({
  className,
  horizontal,
  icon,
  iconColor,
  value,
  label,
  size,
  theme,
  topLabel,
  ...others
}) => {
  // eslint-disable-next-line no-restricted-globals
  const isNumber = !isNaN(
    value.toString().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ''),
  );

  return (
    <div
      className={classnames('atomikui-statistic', className, {
        'atomikui-statistic--top-label': topLabel && !horizontal,
        'atomikui-statistic--horizontal': horizontal,
      })}
      {...others}
    >
      <div className="atomikui-statistic__hd">
        {icon && (
          <span className="atomikui-statistic__icon">
            <Icon icon={icon} size="3x" color={iconColor} />
          </span>
        )}
        <span
          className={classnames('atomikui-statistic__value', {
            'atomikui-statistic__value--number': isNumber,
            [`atomikui-statistic__value--${size}`]: size,
            [`atomikui-statistic__value--${theme}`]: theme,
          })}
        >
          {value}
        </span>
      </div>
      <div className="atomikui-statistic__ft">{label}</div>
    </div>
  );
};

Statistic.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Sets layout as horizontal */
  horizontal: PropTypes.bool,
  /** Icon to be displayed next to statistic */
  icon: PropTypes.object,
  /** Color of the icon */
  iconColor: PropTypes.string,
  /** Label for statistic value */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Postions label on top */
  topLabel: PropTypes.bool,
  /** Sets the size of the value text */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Sets the color theme of the statistic value */
  theme: PropTypes.oneOf([
    'red',
    'orange',
    'gold',
    'yellow',
    'green',
    'light-blue',
    'medium-blue',
    'dark-blue',
    'light-gray',
    'medium-gray',
    'dark-gray',
  ]),
  /** Statistic value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Statistic.defaultProps = {
  className: '',
  horizontal: false,
  icon: null,
  iconColor: '#222',
  label: '',
  size: null,
  theme: null,
  topLabel: false,
  value: '',
};

export default Statistic;
