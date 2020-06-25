import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';

const Collapse = ({
  alignTriggerRight,
  alignTiggerIconRight,
  children,
  className,
  isOpen,
  noTrigger,
  toggleText,
  ...others
}) => {
  const [open, setOpen] = useState(isOpen);
  const id = `collapes-${shortid.generate()}`;
  const collapseRef = useRef();

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div className={classnames('atomikui-collapse', className)} {...others}>
      {!noTrigger && (
        <div
          className={classnames('atomikui-collapse__hd', {
            'is-right-aligned': alignTriggerRight,
          })}
        >
          <Button
            className={classnames('atomikui-collapse__trigger', {
              'is-right-aligned': alignTiggerIconRight,
              'is-open': open,
            })}
            theme="link"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => {
              return setOpen(!open);
            }}
          >
            <Icon icon={faChevronRight} size="lg" color="#444" />
            <span>{toggleText}</span>
          </Button>
        </div>
      )}
      <div
        id={id}
        className="atomikui-collapse__bd"
        style={{
          height: open ? `${collapseRef.current.scrollHeight}px` : 0,
        }}
      >
        <div ref={collapseRef}>{children}</div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  /** Aligns trigger to the right */
  alignTriggerRight: PropTypes.bool,
  /** Aligns trigger icon to the right */
  alignTiggerIconRight: PropTypes.bool,
  /** Collapse content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Sets collapsable content visibility state */
  isOpen: PropTypes.bool,
  /** Hides the collapse trigger */
  noTrigger: PropTypes.bool,
  /** Collapse trigger text */
  toggleText: PropTypes.string,
};

Collapse.defaultProps = {
  alignTriggerRight: false,
  alignTiggerIconRight: false,
  children: <></>,
  className: '',
  isOpen: false,
  noTrigger: false,
  toggleText: 'Tooggle',
};

export default Collapse;
