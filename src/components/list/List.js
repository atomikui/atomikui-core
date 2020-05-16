import React, { Fragment, Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const List = ({ align, children, className, loose, type, ...others }) => {
  const Ul = type === 'ordered' ? 'ol' : 'ul';
  const isMenu = type === 'menu';
  const Wrapper = isMenu ? 'nav' : Fragment;

  return (
    <Wrapper>
      <Ul
        className={classnames('atomikui-list', className, {
          [`atomikui-list--${type}`]: type,
          [`atomikui-list--align-${align}`]: align,
          'atomikui-list--loose': loose,
        })}
        {...others}
      >
        {Children.map(children, (child) => {
          return cloneElement(child, { isMenu });
        })}
      </Ul>
    </Wrapper>
  );
};

List.propTypes = {
  /** Sets a lists text alignment */
  align: PropTypes.oneOf(['center', 'right']),
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** List children */
  children: PropTypes.node,
  /** Adds 8px of spacing between list items */
  loose: PropTypes.bool,
  /** Defines the type of list */
  type: PropTypes.oneOf([
    'bulleted',
    'ordered',
    'horizontal',
    'horizontal-flush',
    'menu',
  ]),
};

List.defaultProps = {
  align: null,
  className: '',
  children: <></>,
  loose: false,
  type: null,
};

export default List;
