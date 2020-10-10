import React, { Fragment, Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const List = ({
  align,
  children,
  className,
  loose,
  title,
  type,
  ...others
}) => {
  const Ul = type === 'ordered' ? 'ol' : 'ul';
  const isMenu = type === 'menu';
  const Wrapper = isMenu ? 'nav' : Fragment;

  return (
    <Wrapper {...(isMenu && { title: `list-${shortid.generate()}` })}>
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
  /** Title attribute for List <nav /> wrapper if `type` is `menu` */
  title: PropTypes.string,
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
  children: null,
  loose: false,
  title: null,
  type: null,
};

export default List;
