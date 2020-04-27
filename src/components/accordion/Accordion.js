import React, { useState, Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Accordion = ({
  className,
  children,
  inverse,
  multipleOpen,
  ...others
}) => {
  const [isExpanded, setIsExpanded] = useState(null);

  return (
    <div
      className={classnames('rcl-accordion', classnames, {
        'rcl-accordion--inverse': inverse,
      })}
      {...others}
    >
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          inverse,
          ...(!multipleOpen && {
            handleClick: (isOpen) => {
              return setIsExpanded(isOpen ? null : index);
            },
            expanded: index === isExpanded,
          }),
        });
      })}
    </div>
  );
};

Accordion.propTypes = {
  /** Array of AccordionItems */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Inverse color variant */
  inverse: PropTypes.bool,
  /** allow multiple panels to be open */
  multipleOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  children: <></>,
  className: '',
  inverse: false,
  multipleOpen: false,
};

export default Accordion;
