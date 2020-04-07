import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import FormField from '../form-field';

// TODO: handle value reset on escape key press

const AutoComplete = ({ classes, items, onChange, value, ...others }) => {
  const [itemList] = useState(items);

  return (
    <Downshift
      onChange={(selection) => {
        return onChange(selection.value);
      }}
      itemToString={(item) => {
        return item ? item.value : '';
      }}
      initialInputValue={value}
      initialSelectedItem={{ value }}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        isOpen,
        inputValue,
        selectedItem,
        getRootProps,
      }) => {
        return (
          <div
            className={classnames('auto-complete', classes)}
            {...getRootProps({}, { suppressRefError: true })}
          >
            <FormField {...getInputProps()} {...others} />
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
                          className={classnames({
                            'is-selected': item.value === selectedItem.value,
                            'is-highlighted': highlightedIndex === index,
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
  /** onChange callback triggered when the value changes */
  onChange: PropTypes.func,
  /** The form field value */
};

AutoComplete.defaultProps = {
  classes: '',
  items: [],
  onChange() {},
  value: '',
};

export default AutoComplete;
