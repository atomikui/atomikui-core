import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const FileUpload = ({
  classes,
  dragAndDrop,
  label,
  onChange,
  uploadBtnVariant,
  ...others
}) => {
  const [files, setFiles] = useState([]);

  const id = `file-input-${Math.round(Math.random() * 10000000)}`;

  const getFileNames = (fileList) => {
    const fileArray = [];

    for (let i = 0; i < fileList.length; i += 1) {
      fileArray.push(fileList[i].name);
    }

    return fileArray;
  };

  const handleChange = (e) => {
    e.preventDefault();

    const selectedFiles = e.target.files || e.dataTransfer.files;

    setFiles(getFileNames(selectedFiles));
    onChange(selectedFiles);
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="file-upload">
      <input
        id={id}
        name="fileUpload"
        type="file"
        onChange={handleChange}
        multiple
        {...others}
      />
      <label
        onDragOver={onDragOver}
        onDrop={(e) => handleChange(e)}
        htmlFor={id}
        className={classnames('file-upload__wrapper', {
          'file-upload__wrapper--drag-and-drop': dragAndDrop,
        })}
      >
        {dragAndDrop && (
          <span className="file-upload__drag-drop-label">
            Select a file to upload or drag and drop in the box
          </span>
        )}
        <span
          className={classnames('btn btn--condensed btn--nowrap', {
            [`btn--${uploadBtnVariant}`]: uploadBtnVariant,
            'btn--no-radius': !dragAndDrop,
          })}
        >
          {label}
        </span>
        {!files.length && (
          <span className="file-upload__no-files-label">No files selected</span>
        )}
        {dragAndDrop ? (
          <ul className="file-upload__file-list">
            {files.map((file) => (
              <li key={Math.random()}>{file}</li>
            ))}
          </ul>
        ) : (
          <span>{files.join(', ')}</span>
        )}
      </label>
    </div>
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
