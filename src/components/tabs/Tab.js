import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';

const Tab = ({ active, className, inverse, label, onClick, ...others }) => {
  return (
    <Button
      variant="hollow"
      className={classnames('rcl-tab', className, {
        'is-active': active,
        'rcl-tab--inverse': inverse,
      })}
      {...(onClick && { onClick })}
      {...others}
    >
      {label}
    </Button>
  );
};

Tab.propTypes = {
  /** Makes a Tab active */
  active: PropTypes.bool,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Tab click event callback */
  onClick: PropTypes.func,
  /** Sets Tab theme as inverse */
  inverse: PropTypes.bool,
  /** Tab label text */
  label: PropTypes.string,
};

Tab.defaultProps = {
  active: false,
  className: '',
  inverse: false,
  onClick() {},
  label: '',
};

export default Tab;
