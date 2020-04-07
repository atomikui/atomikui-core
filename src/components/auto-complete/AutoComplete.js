import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import FormField from '../form-field';

const AutoComplete = ({ classes, items, onChange, ...others }) => {
  const [itemList] = useState(items);

  return (
    <Downshift
      onChange={(selection) => {
        return onChange(selection.value);
      }}
      itemToString={(item) => {
        return item ? item.value : '';
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        selectedItem,
        getRootProps,
      }) => {
        return (
          <div className={classnames('auto-complete', classes)}>
            <FormField
              {...getRootProps({}, { suppressRefError: true })}
              {...getInputProps()}
              {...others}
            />
            <ul className="auto-complete__list" {...getMenuProps()}>
              {isOpen
                ? itemList
                    .filter((item) => {
                      return (
                        !inputValue ||
                        item.value
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                      );
                    })
                    .map((item, index) => {
                      return (
                        <li
                          {...(selectedItem === item && {
                            className: 'is-selected',
                          })}
                          {...getItemProps({
                            key: item.value,
                            index,
                            item,
                          })}
                        >
                          {item.value}
                        </li>
                      );
                    })
                : null}
            </ul>
          </div>
        );
      }}
    </Downshift>
  );
};

AutoComplete.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Array of items that will appear in autocomplete dropdown menu */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
    }),
  ),
  /** onChange callback triggered when value changes */
  onChange: PropTypes.func,
};

AutoComplete.defaultProps = {
  classes: '',
  items: [],
  onChange() {},
};

export default AutoComplete;
