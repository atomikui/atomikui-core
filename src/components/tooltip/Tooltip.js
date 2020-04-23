import React, { Children, cloneElement, useState } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ children, align, ...props }) => {
  const handeMouseEnter = (e) => {
    const el = e.target;
    const content = el.getAttribute('data-content');
  };

  const handeMouseLeave = () => {};

  return (
    <>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          ...props,
          onMouseEnter: handeMouseEnter,
          onMouseLeave: handeMouseLeave,
        });
      })}
    </>
  );
};

Tooltip.propTypes = {
  /** The tooltip alignment */
  align: PropTypes.oneOf('right', 'top', 'bottom', 'left'),
  /** The child element that will recieve a tooltip */
  children: PropTypes.node,
  /** The text that will be rendered as tooltip content */
  title: PropTypes.string,
};

Tooltip.defaultProps = {
  align: 'top',
  children: null,
  title: '',
};

export default Tooltip;
