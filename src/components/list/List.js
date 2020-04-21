import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const List = ({
  align,
  bulleted,
  children,
  className,
  horizontal,
  ordered,
  ...others
}) => {
  return (
    <ul
      className={classnames('rcl-list', className, {
        'rcl-list--bulleted': bulleted,
        'rcl-list--ordered': ordered,
        'rcl-list--horizontal': horizontal,
        [`rcl-list--align-${align}`]: align,
      })}
      {...others}
    >
      {children}
    </ul>
  );
};

List.propTypes = {
  /** Sets a lists text alignment */
  align: PropTypes.oneOf(['center', 'right']),
  /** Makes a list bulleted */
  bulleted: PropTypes.bool,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** List children */
  children: PropTypes.node,
  /** Makes a list horizontal */
  horizontal: PropTypes.bool,
  /** Makes a list an ordered list */
  ordered: PropTypes.bool,
};

List.defaultProps = {
  align: null,
  bulleted: false,
  className: '',
  children: null,
  horizontal: false,
  ordered: false,
};

export default List;
