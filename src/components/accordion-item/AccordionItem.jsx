import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({
  children,
  className,
  expanded,
  handleClick,
  label,
  ...others
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef();

  const headerId = shortid.generate();
  const panelId = shortid.generate();

  const handleOnClick = () => {
    if (handleClick) {
      return handleClick(isExpanded);
    }

    return setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setContentHeight(`${contentRef.current.scrollHeight}px`);
  });

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  return (
    <div className="atomikui-accordion-item" {...others}>
      <button
        type="button"
        id={headerId}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        className="atomikui-accordion-item__trigger"
        onClick={handleOnClick}
      >
        <span className="atomikui-accordion-item__trigger__label">{label}</span>
        <Icon
          className="atomikui-accordion-item__trigger__icon"
          icon={faAngleDown}
          size="lg"
        />
      </button>
      <section
        id={panelId}
        arial-labelledby={headerId}
        className="atomikui-accordion-item__body"
        style={{
          height: isExpanded ? contentHeight : '0px',
        }}
      >
        <div
          className="atomikui-accordion-item__body__content"
          ref={contentRef}
        >
          {children}
        </div>
      </section>
    </div>
  );
};

AccordionItem.propTypes = {
  /** Panel content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Label to be displayed in panel heading */
  label: PropTypes.string,
  /** If set to true, the panel will be expanded by default */
  expanded: PropTypes.bool,
  /** onClick callback */
  handleClick: PropTypes.func,
};

AccordionItem.defaultProps = {
  children: null,
  className: '',
  label: '',
  expanded: false,
  handleClick: null,
};

export default AccordionItem;
