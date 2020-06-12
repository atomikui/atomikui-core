import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Jumbotron = ({ children, className, variant, ...others }) => {
  return (
    <div
      className={classnames('atomikui-jumbotron', className, {
        [`atomikui-jumbotron--${variant}`]: variant,
      })}
      {...others}
    >
      {children}
    </div>
  );
};

Jumbotron.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Jumbotron content */
  children: PropTypes.node,
  /** Color theme variant */
  variant: PropTypes.oneOf([
    'red',
    'orange',
    'yellow',
    'gold',
    'green',
    'light-blue',
    'medium-blue',
    'dark-blue',
    'light-gray',
    'medium-gray',
    'dark-gray',
    'black',
  ]),
};

Jumbotron.defaultProps = {
  className: '',
  children: <></>,
  variant: null,
};

export default Jumbotron;
