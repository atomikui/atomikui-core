import React, { useEffect, useState, forwardRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import List from '../list';
import Hint from '../hint/Hint';
import Button from '../button/Button';

const FileUpload = forwardRef(
  (
    {
      accept,
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
    },
    ref,
  ) => {
    const [fileNames, setFileNames] = useState([]);
    const [files, setFiles] = useState([]);

    const id = shortid.generate();
    const inputName = name || id;
    const inputHintId = `${inputName}_hint`;
    const inputErrorId = `${inputName}_error`;

    const getFileNames = (fileList) =>
      Array.from(fileList).reduce((arr, file) => [...arr, file.name], []);

    const handleChange = (e) => {
      e.preventDefault();

      const formData = new FormData();

      const selectedFiles = e.target.files || e.dataTransfer.files;

      if (selectedFiles.length) {
        setFileNames(getFileNames(selectedFiles));
        selectedFiles.forEach((file) => formData.append(file.name, file));
        setFiles(formData);
      }
    };

    const removeFile = (selectedFile) => {
      files.delete(selectedFile);
      setFiles(files);
      setFileNames(fileNames.filter((fileName) => fileName !== selectedFile));
    };

    const onDragOver = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };

    useEffect(() => {
      onChange(files);
    }, [onChange, files, removeFile]);

    return (
      <div
        data-test-id="file-upload"
        className={classnames('atomikui-file-upload', className, {
          'has-error': hasError,
        })}
      >
        <input
          ref={ref}
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
          data-test-id="file-upload-wrapper"
          className={classnames('atomikui-file-upload__wrapper', {
            'atomikui-file-upload__wrapper--drag-and-drop': dragAndDrop,
          })}
        >
          {dragAndDrop && (
            <span className="atomikui-file-upload__drag-drop-label">
              {label}
            </span>
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
                color="#546e7a"
                title={label}
              />
            ) : (
              label
            )}
          </span>
          {dragAndDrop && fileNames.length > 0 && (
            <>
              <div className="margin-top-16" />
              <List className="atomikui-file-upload__file-list">
                {fileNames.map((fileName) => (
                  <List.Item
                    key={shortid.generate()}
                    onClick={(e) => e.preventDefault()}
                  >
                    {fileName}
                    <Button
                      onClick={() => removeFile(fileName)}
                      className="atomikui-file-upload__delete-btn"
                      theme="hollow"
                      size="sm"
                      condensed
                    >
                      <Icon
                        size="lg"
                        icon={faTimes}
                        color="#546e7a"
                        title={label}
                      />
                    </Button>
                  </List.Item>
                ))}
              </List>
            </>
          )}
          {!dragAndDrop && <span>{fileNames.join(', ')}</span>}
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
  },
);

FileUpload.propTypes = {
  /** Specifies one or more unique file type specifiers describing file types to allow */
  accept: PropTypes.string,
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
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'sky-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'light-orange',
    'orange',
    'deep-orange',
    'amber',
    'brown',
    'gray',
    'blue-gray',
    'black',
    'white',
  ]),
};

FileUpload.defaultProps = {
  accept: '',
  className: '',
  dragAndDrop: false,
  errorText: '',
  hasError: false,
  helpText: '',
  label: 'Select a File',
  name: '',
  onChange() {},
  uploadBtnTheme: null,
};

FileUpload.displayName = 'FileUpload';

export default FileUpload;
