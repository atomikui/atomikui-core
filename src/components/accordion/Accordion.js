import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import generateId from '../../utilities/generateId';

const Accordion = ({ className, multipleOpen, panels, ...others }) => {
  const type = multipleOpen ? 'checkbox' : 'radio';

  const [expanded, setExpanded] = useState(() => {
    let state = {};

    panels.forEach((item, i) => {
      state = { ...state, [i]: item.expanded || false };
    });

    return state;
  });

  const updateAriaExpanded = (index, isChecked) => {
    if (type === 'radio') {
      const state = {};

      Object.keys(expanded).forEach((key) => {
        state[key] = +key === index || false;
      });

      setExpanded(state);
    } else {
      setExpanded({ ...expanded, [index]: isChecked });
    }
  };

  return (
    <div className={classnames('rcl-accordion', classnames)} {...others}>
      {panels.map(({ label, content }, index) => {
        const id = generateId('control');
        const name = multipleOpen ? `control_${index}` : `control`;

        return (
          <div
            className={classnames('rcl-accordion__panel', {
              'is-open': expanded[index],
            })}
            key={`rcl-accordion-item-${index}`}
          >
            <input
              id={id}
              type={type}
              name={name}
              checked={expanded[index]}
              onChange={(e) => {
                updateAriaExpanded(index, e.target.checked);
              }}
            />
            <label
              className="rcl-accordion__panel__label"
              htmlFor={id}
              aria-expanded={expanded[index]}
              role="button"
            >
              <span>{label}</span>
              <Icon
                className="rcl-accordion__panel__label__icon"
                icon={faAngleDown}
                size="lg"
              />
            </label>
            <div className="rcl-accordion__panel__content" aria-labelledby={id}>
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Array representing accordion items */
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      /** Label to be displayed in panel heading */
      label: PropTypes.string,
      /** Panel content */
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      /** If set to true, the panel will be expanded by default */
      expanded: PropTypes.bool,
    }),
  ),
  /** allow multiple panels to be open */
  multipleOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  className: '',
  panels: [],
  multipleOpen: false,
};

export default Accordion;
