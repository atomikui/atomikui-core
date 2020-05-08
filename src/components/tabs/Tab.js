import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';

const Tab = ({ active, className, label, onClick, ...others }) => {
  return (
    <Button
      theme="hollow"
      className={classnames('rcl-tab', className, {
        'is-active': active,
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
  /** Tab label text */
  label: PropTypes.string,
};

Tab.defaultProps = {
  active: false,
  className: '',
  onClick() {},
  label: '',
};

export default Tab;
