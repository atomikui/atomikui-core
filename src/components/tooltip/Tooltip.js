import React, { Children, cloneElement, useState } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tooltip = ({ children, align, ...props }) => {
  const [tooltip, setToolTip] = useState(null);

  const creactTooltip = (content) => {
    return (
      <div
        id="rcl-tooltip"
        className={classnames('rcl-tooltip', {
          [`rcl-tooltip--align-${align}`]: align,
        })}
      >
        {content}
      </div>
    );
  };

  const handeMouseEnter = (e) => {
    const content = e.target.getAttribute('data-content');

    const {
      target: { offsetTop, offsetLeft },
    } = e;

    setToolTip(creactTooltip(content));

    setTimeout(() => {
      const theTooltip = document.querySelector('#rcl-tooltip');
      const coords = theTooltip.getBoundingClientRect();

      const tooltipHeight = coords.height;
      const tooltipWidth = coords.width;

      const targetOffsetLeft = offsetLeft;
      const targetOffsetTop = offsetTop;

      switch (align) {
        case 'right':
          break;
        case 'left':
          break;
        case 'bottom-left':
          break;
        case 'bottom-center':
          break;
        case 'bottom-right':
          break;
        case 'top-left':
          // default
          break;
        case 'top-center':
          break;
        case 'top-right':
          break;
        default:
      }
    }, 0);
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
  align: PropTypes.oneOf([
    'right',
    'left',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'top-left',
    'top-center',
    'top-right',
  ]),
  /** The child element that will recieve a tooltip */
  children: PropTypes.node,
  /** The text that will be rendered as tooltip content */
  title: PropTypes.string,
};

Tooltip.defaultProps = {
  align: 'top-left',
  children: null,
  title: '',
};

export default Tooltip;
