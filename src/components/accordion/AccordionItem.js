import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import useTheme from '../../themeProvider';
import generateId from '../../utilities/generateId';

const AccordionItem = useTheme(
  ({ children, className, expanded, handleClick, label, theme, ...others }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const contentRef = useRef();

    const headerId = generateId('header');
    const panelId = generateId('panel');

    const handleOnClick = () => {
      if (handleClick) {
        return handleClick(isExpanded);
      }

      return setIsExpanded(!isExpanded);
    };

    useEffect(() => {
      setIsExpanded(expanded);
    }, [expanded]);

    return (
      <div
        className={classnames('rcl-accordion-item', className, {
          [`rcl-accordion-item--${theme}`]: theme,
        })}
        {...others}
      >
        <button
          id={headerId}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          className="rcl-accordion-item__trigger"
          onClick={() => {
            return handleOnClick();
          }}
        >
          <span className="rcl-accordion-item__trigger__label">{label}</span>
          <Icon
            className="rcl-accordion-item__trigger__icon"
            icon={faAngleDown}
            size="lg"
          />
        </button>
        <div
          id={panelId}
          arial-labelledby={headerId}
          role="region"
          className="rcl-accordion-item__body"
          style={{
            height: isExpanded ? `${contentRef.current.scrollHeight}px` : 0,
          }}
        >
          <div className="rcl-accordion-item__body__content" ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    );
  },
);

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
  /** Color theme variant */
  theme: PropTypes.oneOf(['dark']),
};

AccordionItem.defaultProps = {
  children: <></>,
  className: '',
  label: '',
  expanded: false,
  handleClick: null,
  theme: null,
};

export default AccordionItem;
