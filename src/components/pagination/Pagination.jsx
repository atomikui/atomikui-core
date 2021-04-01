import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import List from '../list';

const Pagination = ({
  children,
  className,
  theme,
  themeVariant,
  ...others
}) => (
  <List
    className={classnames('atomikui-pagination', {
      [`atomikui-pagination--${theme}${
        themeVariant ? `-${themeVariant}` : ''
      }`]: theme,
    })}
    {...others}
  >
    {Children.map(children, (child) => (
      <List.Item
        className={classnames('atomikui-pagination__item', {
          'is-active': child.props.active,
        })}
        key={shortid.generate()}
      >
        {child}
      </List.Item>
    ))}
  </List>
);

Pagination.propTypes = {
  /** Child elements */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
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

Pagination.defaultProps = {
  children: null,
  className: '',
  theme: null,
  themeVariant: null,
};

export default Pagination;
