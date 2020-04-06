import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import filesize from 'filesize';
import FormField from '../form-field';

const FileUpload = ({ classes, dragAndDrop, onChange, ...others }) => {
  const [files, setFiles] = useState('');

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setFiles(selectedFile);
    onChange(selectedFile);
  };

  return (
    <div
      className={classnames('file-upload', {
        'file-upload--drag-and-drop': dragAndDrop,
      })}
    >
      <FormField
        classes={classnames('formfield--file-upload', classes, {
          'formfield--drag-and-drop': dragAndDrop,
        })}
        type="file"
        onChange={(e) => handleChange(e)}
        {...others}
      />
      {!files ? (
        <span>No files selected</span>
      ) : (
        <div>
          {files.name}
          <br />
          <span className="text-size-12">{filesize(files.size)}</span>
        </div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Makes fiel upload drag and drop */
  dragAndDrop: PropTypes.bool,
  /** Triggers onChange callback */
  onChange: PropTypes.func,
};

FileUpload.defaultProps = {
  classes: '',
  dragAndDrop: false,
  onChange() {},
};

export default FileUpload;
