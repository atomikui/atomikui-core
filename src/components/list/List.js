import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const List = ({ align, children, className, type, ...others }) => {
  const Ul = type === 'ordered' ? 'ol' : 'ul';

  return (
    <Ul
      className={classnames('rcl-list', className, {
        [`rcl-list--${type}`]: type,
        [`rcl-list--align-${align}`]: align,
      })}
      {...others}
    >
      {children}
    </Ul>
  );
};

List.propTypes = {
  /** Sets a lists text alignment */
  align: PropTypes.oneOf(['center', 'right']),
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** List children */
  children: PropTypes.node,
  /** Defines the type of list */
  type: PropTypes.oneOf(['bulleted', 'ordered', 'horizontal']),
};

List.defaultProps = {
  align: null,
  className: '',
  children: null,
  type: null,
};

export default List;
