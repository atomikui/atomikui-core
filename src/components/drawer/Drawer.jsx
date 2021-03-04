import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import Overlay from '../overlay';

const Drawer = ({
  children,
  className,
  height,
  isOpen,
  onClose,
  position,
  width,
  ...others
}) => {
  const ref = useRef();
  const [styles, setStyles] = useState({});
  const Wrapper = isOpen ? FocusTrap : 'div';

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setStyles({ [position]: 0 });
    } else {
      setStyles({
        [position]: `-${
          ref.current[
            position.match(/top|bottom/) ? 'clientHeight' : 'clientWidth'
          ]
        }px`,
      });
    }
  }, [isOpen, position]);

  return (
    <>
      <Overlay isActive={isOpen} onClick={onClose} />
      <Wrapper>
        <div
          role="presentation"
          ref={ref}
          onKeyDown={handleKeyDown}
          data-test-id="drawer"
          className={classnames('atomikui-drawer', className, {
            'is-open': isOpen,
            [`atomikui-drawer--${position}`]: position,
          })}
          style={{ width, height, ...styles }}
          {...others}
        >
          {children}
        </div>
      </Wrapper>
    </>
  );
};

Drawer.propTypes = {
  /** Drawer content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Sets drawer height */
  height: PropTypes.number,
  /** Specifies if drawer is open */
  isOpen: PropTypes.bool,
  /** Callback triggered on close. */
  onClose: PropTypes.func,
  /** Drawer position */
  position: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  /** Sets drawer width */
  width: PropTypes.number,
};

Drawer.defaultProps = {
  children: null,
  className: '',
  height: null,
  isOpen: false,
  onClose: null,
  position: 'left',
  width: null,
};

export default Drawer;
