import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';
import FormField from '../form-field';
import FormOption from '../form-option';
import Dropdown from '../dropdown';
import Switch from '../switch';

const Fieldset = ({ fields, legend }) => {
  const components = {
    button: Button,
    formfield: FormField,
    formoption: FormOption,
    dropdown: Dropdown,
    switch: Switch,
  };

  const fieldset = fields.map(({ classes, component, props }) => {
    const Component = components[component];

    return (
      <div className={classnames('fieldset__column', classes)}>
        <Component {...props} />
      </div>
    );
  });

  return (
    <fieldset className="fieldset">
      <legend className="fieldset__legend">{legend}</legend>
      {fieldset}
    </fieldset>
  );
};

Fieldset.propTypes = {
  /** Custom classes to be applied to fieldset */
  classes: PropTypes.string,
  /** Fields to be render as fieldset */
  fields: PropTypes.arrayOf(PropTypes.shape({
    /** Form field component */
    component: PropTypes.string,
    /** Form field props */
    props: PropTypes.object,
  })),
  /** Fieldset legend */
  legend: PropTypes.string,
};

Fieldset.defaultProps = {
  classes: '',
  fields: [],
  legend: '',
};

export default Fieldset;
