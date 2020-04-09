import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import generateId from '../../utilities/generateId';

const Accordion = ({ classes, multipleOpen, panels, ...others }) => {
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
    <div className="accordion" {...others}>
      {panels.map(({ label, content }, index) => {
        const id = generateId('control');

        const name = multipleOpen ? `control_${index}` : `control`;

        return (
          <div
            className={classnames('accordion__panel', {
              'is-open': expanded[index],
            })}
            key={`accordion-item-${index}`}
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
              className="accordion__panel__label"
              htmlFor={id}
              aria-expanded={expanded[index]}
              role="button"
            >
              <span>{label}</span>
              <svg
                className="accordion__panel__label__icon"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093" />
              </svg>
            </label>
            <div className="accordion__panel__content" aria-labelledby={id}>
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
  classes: PropTypes.string,
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
  classes: '',
  panels: [],
  multipleOpen: false,
};

export default Accordion;
