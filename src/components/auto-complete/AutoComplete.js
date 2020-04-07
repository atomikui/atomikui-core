import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import FormField from '../form-field';

const AutoComplete = ({ classes, ...others }) => {
  return (
    <div className={classnames('auto-complete', classes, {})} {...others}></div>
  );
};

AutoComplete.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

AutoComplete.defaultProps = {
  classes: '',
};

export default AutoComplete;
