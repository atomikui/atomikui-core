import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Accordion = ({ classes, items, multipleOpen, ...others }) => {
  return (
    <div className={classnames('accordion', classes, {})} {...others}>
      {items.map(({ title, content }, i) => {
        const id = `panel-control-${i}`;
        const type = multipleOpen ? 'checkbox' : 'radio';
        const name = multipleOpen
          ? `accordion_control_${i}`
          : 'accordion_control';

        return (
          <div key={Math.random()} className="accordion__item">
            <input id={id} type={type} name={name} />
            <label className="accordion__item__title" htmlFor={id}>
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
