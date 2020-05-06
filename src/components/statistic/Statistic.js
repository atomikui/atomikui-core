import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const Statistic = ({
  className,
  icon,
  iconColor,
  value,
  label,
  topLabel,
  ...others
}) => {
  // eslint-disable-next-line no-restricted-globals
  const isNumber = !isNaN(
    value.toString().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ''),
  );

  return (
    <div className={classnames('rcl-statistic', className, {})} {...others}>
      <div className="rcl-statistic__hd">
        {icon && (
          <span className="rcl-statistic__icon">
            <Icon icon={icon} size="3x" color={iconColor} />
          </span>
        )}
        <span
          className={classnames('rcl-statistic__value', {
            'rcl-statistic__value--lg': isNumber,
          })}
        >
          {value}
        </span>
      </div>
      <div className="rcl-statistic__ft">{label}</div>
    </div>
  );
};

Statistic.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Icon to be displayed next to statistic */
  icon: PropTypes.node,
  /** Color of the icon */
  iconColor: PropTypes.string,
  /** Label for statistic value */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Postions label on top */
  topLabel: PropTypes.bool,
  /** Statistic value */
  value: PropTypes.string,
};

Statistic.defaultProps = {
  className: '',
  icon: null,
  iconColor: '#222',
  label: '',
  topLabel: false,
  value: '',
};

export default Statistic;
