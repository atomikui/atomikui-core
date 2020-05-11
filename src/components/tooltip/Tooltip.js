import React, { Children, cloneElement, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tooltip = ({ children, align, triggerOnClick, variant, ...props }) => {
  const [tooltip, setToolTip] = useState(null);

  const createTooltipElement = (content) => {
    return (
      <div
        id="atomikui-tooltip"
        className={classnames('atomikui-tooltip', {
          [`atomikui-tooltip--align-${align}`]: align,
          [`atomikui-tooltip--${variant}`]: variant,
        })}
      >
        <div className="atomikui-tooltip__content">{content}</div>
      </div>
    );
  };

  const createTooltip = async (e) => {
    const content = e.target.getAttribute('data-tooltip');

    const {
      target: { offsetTop, offsetLeft, clientWidth, clientHeight },
    } = e;

    await setToolTip(createTooltipElement(content));

    const theTooltip = document.querySelector('#atomikui-tooltip');
    const coords = theTooltip.getBoundingClientRect();

    const tooltipHeight = coords.height;
    const tooltipWidth = coords.width;

    const targetOffsetLeft = offsetLeft;
    const targetOffsetLeftPosition = `${offsetLeft}px`;
    const targetOffsetTop = offsetTop;

    // All top tooltip instances
    const topOffset = `${targetOffsetTop - tooltipHeight}px`;

    // All bottom tooltip instances
    const bottomOffset = `${targetOffsetTop + clientHeight}px`;

    // right
    const rightOffset = `${targetOffsetLeft + clientWidth}px`;

    // left
    const leftOffset = `${targetOffsetLeft - tooltipWidth}px`;

    // top-right & bottom-right
    const topBottomRightOffset = `${
      window.innerWidth - (targetOffsetLeft + clientWidth)
    }px`;

    // top-center & bottom-cnenter
    const centerOffsetFromWidth =
      clientWidth > tooltipWidth
        ? `${targetOffsetLeft + (clientWidth - tooltipWidth) / 2}px`
        : `${targetOffsetLeft - (tooltipWidth - clientWidth) / 2}px`;

    // left & right
    const centerOffsetFromHeight =
      clientWidth > tooltipWidth
        ? `${targetOffsetTop + (clientHeight - tooltipHeight) / 2}px`
        : `${targetOffsetTop - (tooltipHeight - clientHeight) / 2}px`;

    switch (align) {
      case 'right':
        theTooltip.style.top = centerOffsetFromHeight;
        theTooltip.style.left = rightOffset;
        break;
      case 'left':
        theTooltip.style.top = centerOffsetFromHeight;
        theTooltip.style.left = leftOffset;
        break;
      case 'bottom-left':
        theTooltip.style.top = bottomOffset;
        theTooltip.style.left = targetOffsetLeftPosition;
        break;
      case 'bottom-center':
        theTooltip.style.top = bottomOffset;
        theTooltip.style.left = centerOffsetFromWidth;
        break;
      case 'bottom-right':
        theTooltip.style.top = bottomOffset;
        theTooltip.style.right = topBottomRightOffset;
        break;
      case 'top-left':
        theTooltip.style.top = topOffset;
        theTooltip.style.left = targetOffsetLeftPosition;
        break;
      case 'top-center':
        theTooltip.style.top = topOffset;
        theTooltip.style.left = centerOffsetFromWidth;
        break;
      case 'top-right':
        theTooltip.style.top = topOffset;
        theTooltip.style.right = topBottomRightOffset;
        break;
      default:
    }
  };

  const removeTooltip = () => {
    return setToolTip(null);
  };

  useEffect(() => {
    if (triggerOnClick) {
      document.addEventListener('click', (e) => {
        if (!e.target.getAttribute('data-tooltip')) {
          setToolTip(null);
        }
      });
    }
  }, []);

  return (
    <>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          ...props,
          ...(!triggerOnClick && {
            onFocus: createTooltip,
            onBlur: removeTooltip,
            onMouseEnter: createTooltip,
            onMouseLeave: removeTooltip,
            ...(tooltip && { 'aria-describedby': 'atomikui-tooltip' }),
          }),
          ...(triggerOnClick && {
            onClick: createTooltip,
          }),
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
  /** triggers the tooltip onClick/onTouchStart */
  triggerOnClick: PropTypes.bool,
  /** Tooltip theme variant */
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

Tooltip.defaultProps = {
  align: 'top-left',
  children: <></>,
  triggerOnClick: false,
  variant: null,
};

export default Tooltip;
