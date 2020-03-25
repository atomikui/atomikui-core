import React from 'react';
// import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';
import FormField from '../form-field';
import FormOption from '../form-option';
import Dropdown from '../dropdown';
import Switch from '../switch';

const Fieldset = ({ fields }) => {
  const components = {
    button: Button,
    formfield: FormField,
    formoption: FormOption,
    dropdown: Dropdown,
    switch: Switch,
  };

  const fieldset = fields.map(({ component, colSpan, props }) => {
    const Component = components[component];

    return (
      <Component {...props} />
    );
  });

  return fieldset;
};

Fieldset.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string,
    colSpan: PropTypes.string,
    props: PropTypes.object,
  })),
};

Fieldset.defaultProps = {
  fields: [],
};

export default Fieldset;
