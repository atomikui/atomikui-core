import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';

const Collapse = ({
  rightAlignTrigger,
  rightAlignTriggerIcon,
  children,
  className,
  isOpen,
  noTrigger,
  toggleText,
  ...others
}) => {
  const [open, setOpen] = useState(isOpen);
  const [contentHeight, setContentHeight] = useState('0px');

  const id = `collapes-${shortid.generate()}`;
  const collapseRef = useRef();

  useEffect(() => {
    setContentHeight(`${collapseRef.current.scrollHeight}px`);
  }, []);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div className={classnames('atomikui-collapse', className)} {...others}>
      {!noTrigger && (
        <div
          className={classnames('atomikui-collapse__hd', {
            'atomikui-collapse__hd--right-aligned': rightAlignTrigger,
          })}
        >
          <Button
            className={classnames('atomikui-collapse__trigger', {
              'atomikui-collapse__trigger--right-aligned-icon': rightAlignTriggerIcon,
              'is-open': open,
            })}
            theme="link"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => {
              return setOpen(!open);
            }}
          >
            <Icon icon={faChevronRight} size="lg" />
            <span>{toggleText}</span>
          </Button>
        </div>
      )}
      <div
        id={id}
        className="atomikui-collapse__bd"
        style={{
          height: open ? contentHeight : '0px',
        }}
      >
        <div ref={collapseRef}>{children}</div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  /** Aligns trigger to the right */
  rightAlignTrigger: PropTypes.bool,
  /** Aligns trigger icon to the right */
  rightAlignTriggerIcon: PropTypes.bool,
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
  rightAlignTrigger: false,
  rightAlignTriggerIcon: false,
  children: <></>,
  className: '',
  isOpen: false,
  noTrigger: false,
  toggleText: 'Tooggle',
};

export default Collapse;
