import React, { useState, Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import generateId from '../../utilities/generateId';

const Accordion = ({
  className,
  children,
  inverse,
  multipleOpen,
  ...others
}) => {
  const type = multipleOpen ? 'checkbox' : 'radio';

  if (multipleOpen) {
    const [state, setState] = useState([]);
  } else {
    const [state, setState] = useState(null);
  }

  // const updateAriaExpanded = (index, isChecked) => {
  //   if (type === 'radio') {
  //     const state = {};

  //     Object.keys(expanded).forEach((key) => {
  //       state[key] = +key === index || false;
  //     });

  //     setExpanded(state);
  //   } else {
  //     setExpanded({ ...expanded, [index]: isChecked });
  //   }
  // };

  return (
    <div
      className={classnames('rcl-accordion', classnames, {
        'rcl-accordion--inverse': inverse,
      })}
      {...others}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, { inverse });
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
