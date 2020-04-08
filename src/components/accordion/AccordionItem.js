import React, { useState } from 'react';
import PropTypes from 'prop-types';
import generateId from '../../utilities/generateId';

const AccordionItem = ({ content, id, name, title, type }) => {
  const uid = id || generateId();
  const [ariaExpanded, setAriaExpanded] = useState(false);

  return (
    <div className="accordion__item">
      <input id={uid} type={type} name={name} />
      <label
        className="accordion__item__title"
        htmlFor={uid}
        aria-expanded={ariaExpanded}
      >
        {title}
      </label>
      <div className="accordion__item__panel">{content}</div>
    </div>
  );
};

AccordionItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

AccordionItem.defaultProps = {
  content: '',
  id: '',
  name: '',
  title: 'Panel Title',
  type: 'radio',
};

export default AccordionItem;
