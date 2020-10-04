import React, { createRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';
import FormField from '../form-field';

const Search = ({ className, shape, onSubmit, ...others }) => {
  const inputRef = createRef();

  const handleSubmit = () => {
    onSubmit(inputRef.current.value);
    inputRef.current.value = '';
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div
      className={classnames('atomikui-search', className, {
        [`atomikui-search--${shape}`]: shape,
      })}
    >
      <FormField
        ref={inputRef}
        onKeyUp={handleKeyPress}
        aria-label="Enter search query"
        {...others}
      />
      <Button aria-label="submit" onClick={handleSubmit}>
        <Icon icon={faSearch} theme="hollow" />
      </Button>
    </div>
  );
};

Search.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** On submit callback */
  onSubmit: PropTypes.func.isRequired,
  /** Search container shape */
  shape: PropTypes.oneOf(['square', 'pill']),
};

Search.defaultProps = {
  className: '',
  shape: null,
};

export default Search;
