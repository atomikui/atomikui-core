import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Label = ({ classes, text, ...others }) => (
  <label className={classnames('label', classes)} {...others}>{text}</label>
);

Label.propTypes = {
  /** Custom classes to be added to Label component */
  classes: PropTypes.string,
  /** Label text */
  text: PropTypes.string
};

Label.defaultProps = {
  classes: '',
  text: '',
}

export default Label;