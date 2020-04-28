import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { List, ListItem } from '../list';

const FileUpload = ({
  className,
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
    <div className={classnames('rcl-file-upload', className)}>
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
        onDrop={(e) => {
          return handleChange(e);
        }}
        htmlFor={id}
        className={classnames('rcl-file-upload__wrapper', {
          'rcl-file-upload__wrapper--drag-and-drop': dragAndDrop,
        })}
      >
        {dragAndDrop && (
          <span className="rcl-file-upload__drag-drop-label">
            Select a file to upload or drag and drop in the box
          </span>
        )}
        <span
          className={classnames('rcl-btn rcl-btn--condensed rcl-btn--nowrap', {
            [`rcl-btn--${uploadBtnVariant}`]: uploadBtnVariant,
            'rcl-btn--no-radius': !dragAndDrop,
          })}
        >
          {label}
        </span>
        {!files.length && (
          <span className="rcl-file-upload__no-files-label">
            No files selected
          </span>
        )}
        {dragAndDrop ? (
          <List className="rcl-file-upload__file-list">
            {files.map((file, index) => {
              return <ListItem key={`file-${index}`}>{file}</ListItem>;
            })}
          </List>
        ) : (
          <span>{files.join(', ')}</span>
        )}
      </label>
    </div>
  );
};

FileUpload.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
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
  className: '',
  dragAndDrop: false,
  label: 'Select a File',
  onChange() {},
  uploadBtnVariant: null,
};

export default FileUpload;
