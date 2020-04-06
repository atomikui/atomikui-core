import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import FormField from '../form-field';

const FileUpload = ({
  classes,
  dragAndDrop,
  label,
  onChange,
  uploadBtnVariant,
  ...others
}) => {
  const [files, setFiles] = useState([]);

  const id = `file-upload-${Math.round(Math.random() * 10000000)}`;

  const getFileNames = (fileList) => {
    const fileArray = [];

    for (let i = 0; i < fileList.length; i++) {
      fileArray.push(fileList.item(i).name);
    }

    return fileArray;
  };

  const handleChange = (e) => {
    const selectedFiles = e.target.files;

    setFiles(getFileNames(selectedFiles));
    onChange(selectedFiles);
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const selectedFiles = e.dataTransfer.files;
    setFiles(getFileNames(selectedFiles));
    onChange(selectedFiles);
  };

  return (
    <>
      <FormField
        id={id}
        name="fileUpload"
        classes="formfield--file-upload"
        type="file"
        onChange={handleChange}
        multiple
        {...others}
      />
      <label
        onDragOver={onDragOver}
        onDrop={(e) => handleDrop(e)}
        htmlFor={id}
        className={classnames('file-upload', {
          'file-upload--drag-and-drop': dragAndDrop,
        })}
      >
        {dragAndDrop && (
          <span className="text-weight-bold">
            Select a file to upload or drag and drop in the box
          </span>
        )}
        <span
          className={classnames(
            'btn btn--no-radius btn--condensed btn--nowrap',
            {
              [`btn--${uploadBtnVariant}`]: uploadBtnVariant,
            },
          )}
        >
          {label}
        </span>
        {!files.length ? (
          <span>No files selected</span>
        ) : (
          <span>{files.join(', ')}</span>
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
