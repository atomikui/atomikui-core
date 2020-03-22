import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Label = ({ classes, children, ...others }) => (
  <label className={classnames('label', classes)} {...others}>{children}</label>
);

Label.propTypes = {
  /** Custom classes to be added to Label component */
  classes: PropTypes.string,
  /** Label text */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Label.defaultProps = {
  classes: '',
  children: null,
}

export default Label;