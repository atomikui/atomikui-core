import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import filesize from 'filesize';
import FormField from '../form-field';

const FileUpload = ({
  classes,
  dragAndDrop,
  label,
  onChange,
  uploadBtnVariant,
  ...others
}) => {
  const [files, setFiles] = useState('');

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFiles(selectedFile);
    onChange(selectedFile);
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    setFiles(selectedFile);
    onChange(selectedFile);
  };

  return (
    <>
      <FormField
        id="file-upload"
        name="fileUpload"
        classes="formfield--file-upload"
        type="file"
        onChange={handleChange}
        {...others}
      />
      <label
        onDragOver={onDragOver}
        onDrop={(e) => handleDrop(e)}
        htmlFor="file-upload"
        className={classnames('file-upload', {
          'file-upload--drag-and-drop': dragAndDrop,
        })}
      >
        {dragAndDrop && (
          <div className="text-weight-bold">
            Select a file to upload or drag and drop in the box
          </div>
        )}
        <div
          className={classnames('btn btn--no-radius btn--condensed', {
            [`btn--${uploadBtnVariant}`]: uploadBtnVariant,
          })}
        >
          {label}
        </div>
        {!files ? (
          <span>No files selected</span>
        ) : (
          <div>
            {files.name}
            <br />
            <span className="text-size-12">{filesize(files.size)}</span>
          </div>
        )}
      </label>
    </>
  );
};

FileUpload.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Makes fiel upload drag and drop */
  dragAndDrop: PropTypes.bool,
  /** File upload label */
  label: PropTypes.string,
  /** Triggers onChange callback */
  onChange: PropTypes.func,
  /** Specifies the upload button variant */
  uploadBtnVariant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'hollow',
    'link',
    'block',
  ]),
};

FileUpload.defaultProps = {
  classes: '',
  dragAndDrop: false,
  label: 'Select a File',
  onChange() {},
  uploadBtnVariant: '',
};

export default FileUpload;
