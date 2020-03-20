import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Label = ({ classes, text, ...others }) => (
  <label className={classnames('label', classes)} {...others}>{text}</label>
);

Label.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string
};

Label.defaultProps = {
  classes: '',
  text: '',
}

export default Label;