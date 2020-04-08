import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Accordion = ({ classes, items, multipleOpen, ...others }) => {
  const type = multipleOpen ? 'checkbox' : 'radio';

  const [expanded, setExpanded] = useState(() => {
    let state = {};

    items.forEach((item, i) => {
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
      {items.map(({ label, content }, index) => {
        const id = `panel-${type}-control-${index}`;
        const name = multipleOpen
          ? `accordion_ ${type}_control_${index}`
          : `accordion_ ${type}_control`;

        return (
          <div
            className={classnames('accordion__item', {
              'is-open': expanded[index],
            })}
            key={Math.random()}
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
              className="accordion__item__label"
              htmlFor={id}
              aria-expanded={expanded[index]}
              role="button"
            >
              <span>{label}</span>
              <svg
                className="accordion__item__label__icon"
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
            <div className="accordion__item__panel" aria-labelledby={id}>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      expanded: PropTypes.bool,
    }),
  ),
  /** allow multiple panels to be open */
  multipleOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  classes: '',
  content: [],
  multipleOpen: false,
};

export default Accordion;
