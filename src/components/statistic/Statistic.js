import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Statistic = ({ className, icon, stat, statLabel, ...others }) => {
  return (
    <div
      className={classnames('rcl-statistic', className, {})}
      {...others}
    ></div>
  );
};

Statistic.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Icon to be displayed next to statistic */
  icon: PropTypes.node,
};

Statistic.defaultProps = {
  className: '',
};

export default Statistic;
