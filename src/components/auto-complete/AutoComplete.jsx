import React, { useState, forwardRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import FormField from '../form-field';

const AutoComplete = forwardRef(
  ({ className, items, onChange, value, ...others }, ref) => {
    const [itemList] = useState(items);

    return (
      <Downshift
        onChange={(selection) => {
          return onChange(selection ? selection.value : '');
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
          getRootProps,
          selectedItem,
        }) => {
          return (
            <div
              className={classnames('atomikui-auto-complete', className)}
              {...getRootProps({}, { suppressRefError: true })}
            >
              <FormField ref={ref} {...getInputProps()} {...others} />
              <ul className="atomikui-auto-complete__list" {...getMenuProps()}>
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
                            key={`item-${index + 1}`}
                            className={classnames({
                              'is-selected': selectedItem
                                ? selectedItem.value === item.value
                                : false,
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
  },
);

AutoComplete.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Array of items that will appear in autocomplete dropdown menu */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
    }),
  ),
  /** onChange callback triggered when the value changes */
  onChange: PropTypes.func,
  /** The form field value */
  value: PropTypes.string,
};

AutoComplete.defaultProps = {
  className: '',
  items: [],
  onChange() {},
  value: '',
};

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
