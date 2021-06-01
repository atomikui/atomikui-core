import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import setTheme from '../../utilities/setTheme';

const Jumbotron = ({ children, className, theme, themeVariant, ...others }) => (
  <div
    className={classnames('atomikui-jumbotron', className, {
      [setTheme('atomikui-jumbotron', theme, themeVariant)]: theme,
    })}
    data-test-id="jumbotron"
    {...others}
  >
    {children}
  </div>
);

Jumbotron.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Jumbotron content */
  children: PropTypes.node,
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
  /** The theme variant */
  themeVariant: PropTypes.oneOf(['light']),
};

Jumbotron.defaultProps = {
  className: '',
  children: null,
  theme: null,
  themeVariant: null,
};

export default Jumbotron;
