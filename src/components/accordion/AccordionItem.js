import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({
  children,
  className,
  expanded,
  inverse,
  label,
  ...others
}) => {
  return (
    <div
      className={classnames('rcl-accordion-item', className, {
        'rcl-accordion-item--inverse': inverse,
      })}
      {...others}
    >
      <button className="rcl-accordion-item__trigger">
        <span className="rcl-accordion-item__trigger__label">{label}</span>
        <Icon
          className="rcl-accordion-item__trigger__icon"
          icon={faAngleDown}
          size="lg"
        />
      </button>
      <div
        className={classnames('rcl-accordion-item__body', {
          'is-expanded': expanded,
        })}
      >
        {children}
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  /** Panel content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Inverse color variant */
  inverse: PropTypes.bool,
  /** Label to be displayed in panel heading */
  label: PropTypes.string,
  /** If set to true, the panel will be expanded by default */
  expanded: PropTypes.bool,
};

AccordionItem.defaultProps = {
  children: <></>,
  className: '',
  inverse: false,
  label: '',
  expanded: false,
};

export default AccordionItem;
