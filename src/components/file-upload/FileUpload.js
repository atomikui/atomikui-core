import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import FormField from '../form-field';

const FileUpload = ({ classes, ...others }) => (
  <div className={classnames('component-class', classes, {})}>
    <FormField type="file" {...others} />
  </div>
);

FileUpload.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

FileUpload.defaultProps = {
  classes: '',
};

export default FileUpload;
