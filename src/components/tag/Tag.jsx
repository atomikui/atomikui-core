import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import setTheme from '../../utilities/setTheme';

const Tag = ({
  children,
  className,
  shape,
  theme,
  themeVariant,
  ...others
}) => (
  <div
    className={classnames('atomikui-tag', className, {
      [setTheme('atomikui-tag', theme, themeVariant)]: theme,
      [`atomikui-tag--${shape}`]: shape,
    })}
    {...others}
  >
    {children}
  </div>
);

Tag.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Content to be displayed inside badge */
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
  /** Theme color cariant */
  themeVariant: PropTypes.oneOf(['light']),
  /** Specifies a badge's shape. */
  shape: PropTypes.oneOf(['pill', 'square']),
};

Tag.defaultProps = {
  className: '',
  children: '',
  theme: null,
  shape: null,
  themeVariant: null,
};

export default Tag;
