import React, { Fragment, Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const List = ({ align, children, className, isMenu, type, ...others }) => {
  const Ul = type === 'ordered' ? 'ol' : 'ul';
  const Wrapper = isMenu ? 'nav' : Fragment;

  return (
    <Wrapper>
      <Ul
        className={classnames('rcl-list', className, {
          [`rcl-list--${type}`]: type,
          [`rcl-list--align-${align}`]: align,
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
  /** Specifies that a list is a menu */
  isMenu: PropTypes.bool,
  /** Defines the type of list */
  type: PropTypes.oneOf(['bulleted', 'ordered', 'horizontal']),
};

List.defaultProps = {
  align: null,
  className: '',
  children: <></>,
  isMenu: false,
  type: null,
};

export default List;
