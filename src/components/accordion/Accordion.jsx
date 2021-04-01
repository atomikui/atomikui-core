import React, { useEffect, useState, Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import AccordionItem from './components/accordion-item';

const Accordion = ({
  className,
  children,
  defaultOpen,
  multipleOpen,
  ...others
}) => {
  const [isExpanded, setIsExpanded] = useState(null);

  useEffect(() => {
    setIsExpanded(defaultOpen);
  }, [defaultOpen]);

  return (
    <div
      className={classnames('atomikui-accordion', classnames)}
      data-test-id="accordion"
      {...others}
    >
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          ...(!multipleOpen && {
            handleClick: (isOpen) => setIsExpanded(isOpen ? null : index),
            expanded: index === isExpanded,
          }),
        }),
      )}
    </div>
  );
};

Accordion.propTypes = {
  /** Array of AccordionItems */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Sets the index of a panel thay is open by default */
  defaultOpen: PropTypes.number,
  /** allow multiple panels to be open */
  multipleOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  children: null,
  className: '',
  defaultOpen: null,
  multipleOpen: false,
};

Accordion.Item = AccordionItem;

export default Accordion;
