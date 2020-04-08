import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Accordion = ({ classes, items, multipleOpen, ...others }) => {
  const [expanded, setExpanded] = useState(() => {
    let state = {};

    items.forEach((item, i) => {
      state = { ...state, [i]: item.expanded || false };
    });

    return state;
  });

  const updateAriaExpanded = (type, index, isChecked) => {
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
    <div className={classnames('accordion', classes, {})} {...others}>
      {items.map(({ title, content }, i) => {
        const type = multipleOpen ? 'checkbox' : 'radio';
        const id = `panel-${type}-control-${i}`;
        const name = multipleOpen
          ? `accordion_ ${type}_control_${i}`
          : `accordion_ ${type}_control`;

        return (
          <div className="accordion__item" key={Math.random()}>
            <input
              id={id}
              type={type}
              name={name}
              checked={expanded[i]}
              onChange={(e) => {
                updateAriaExpanded(type, i, e.target.checked);
              }}
            />
            <label
              className="accordion__item__title"
              htmlFor={id}
              aria-expanded={expanded[i]}
            >
              {title}
            </label>
            <div className="accordion__item__panel">{content}</div>
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
      title: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
