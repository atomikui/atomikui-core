import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Jumbotron = ({ children, className, theme, ...others }) => {
  return (
    <div
      className={classnames('atomikui-jumbotron', className, {
        [`atomikui-jumbotron--${theme}`]: theme,
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
  theme: PropTypes.oneOf([
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
  theme: null,
};

export default Jumbotron;
