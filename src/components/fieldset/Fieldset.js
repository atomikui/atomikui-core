import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Fieldset = ({ classes, ...others }) => (
    <div className={classnames('fieldset', classes, {})} {...others}></div>
);

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
