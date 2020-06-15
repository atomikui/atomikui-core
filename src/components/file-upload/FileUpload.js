import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { List, ListItem } from '../list';
import Hint from '../hint/Hint';

const FileUpload = ({
  className,
  dragAndDrop,
  errorText,
  hasError,
  helpText,
  label,
  name,
  onChange,
  uploadBtnTheme,
  ...others
}) => {
  const [files, setFiles] = useState([]);

  const id = shortid.generate();
  const inputName = name || id;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;

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
    <div
      className={classnames('atomikui-file-upload', className, {
        'has-error': hasError,
      })}
    >
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
        onDrop={handleChange}
        htmlFor={id}
        className={classnames('atomikui-file-upload__wrapper', {
          'atomikui-file-upload__wrapper--drag-and-drop': dragAndDrop,
        })}
      >
        {dragAndDrop && (
          <span className="atomikui-file-upload__drag-drop-label">{label}</span>
        )}
        <span
          className={classnames(
            'atomikui-file-upload__btn atomikui-btn atomikui-btn--condensed atomikui-btn--nowrap',
            {
              [`atomikui-btn--${uploadBtnTheme}`]: uploadBtnTheme,
              'atomikui-btn--no-radius': !dragAndDrop,
            },
          )}
        >
          {dragAndDrop ? (
            <Icon
              icon={faCloudUploadAlt}
              size="5x"
              color="#027abf"
              title={label}
            />
          ) : (
            label
          )}
        </span>
        {dragAndDrop && files.length > 0 && (
          <>
            <div className="margin-top-16" />
            <List className="atomikui-file-upload__file-list">
              {files.map((file, index) => {
                return <ListItem key={shortid.generate()}>{file}</ListItem>;
              })}
            </List>
          </>
        )}
        {!dragAndDrop && <span>{files.join(', ')}</span>}
      </label>
      {(helpText || errorText) && (
        <div className="atomikui-formfield__hints">
          {helpText && <Hint id={inputHintId}>{helpText}</Hint>}
          {hasError && (
            <Hint id={inputErrorId} type="error">
              {errorText}
            </Hint>
          )}
        </div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Makes fiel upload drag and drop */
  dragAndDrop: PropTypes.bool,
  /** Text to be displayed when there is an error. */
  errorText: PropTypes.string,
  /** Specifies the error state. */
  hasError: PropTypes.bool,
  /** Assistive text to be displayed with form field. */
  helpText: PropTypes.string,
  /** File upload label */
  label: PropTypes.string,
  /** Specifies input name attribute. */
  name: PropTypes.string,
  /** Triggers onChange callback */
  onChange: PropTypes.func,
  /** Specifies the upload button theme variant */
  uploadBtnTheme: PropTypes.oneOf([
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
  errorText: '',
  hasError: false,
  helpText: '',
  label: 'Select a File',
  onChange() {},
  uploadBtnTheme: null,
};

export default FileUpload;
