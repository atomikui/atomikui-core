import React, { Children, cloneElement, useState } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tooltip = ({ children, align, ...props }) => {
  const [tooltip, setToolTip] = useState(null);

  const creactTooltip = (content, styles) => {
    return (
      <div
        className={classnames('rcl-tooltip', {
          [`rcl-tooltip--align-${align}`]: align,
        })}
        style={styles}
      >
        {content}
      </div>
    );
  };

  const handeMouseEnter = (e) => {
    const styles = {};

    const {
      target: { clientHeight, clientWidth },
      clientX,
      clientY,
    } = e;

    const content = e.target.getAttribute('data-content');

    setToolTip(creactTooltip(content, styles));
  };

  const handeMouseLeave = () => {
    return setToolTip(null);
  };

  return (
    <>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          ...props,
          onMouseEnter: handeMouseEnter,
          onMouseLeave: handeMouseLeave,
        });
      })}
      {createPortal(tooltip, document.body)}
    </>
  );
};

Tooltip.propTypes = {
  /** The tooltip alignment */
  align: PropTypes.oneOf(['right', 'top', 'bottom', 'left']),
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
