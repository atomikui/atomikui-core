import React, { useState, Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import useTheme from '../../themeProvider';

const Accordion = useTheme(
  ({ className, children, theme, multipleOpen, ...others }) => {
    const [isExpanded, setIsExpanded] = useState(null);

    return (
      <div
        className={classnames('rcl-accordion', classnames, {
          [`rcl-accordion--${theme}`]: theme,
        })}
        {...others}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            theme,
            ...(!multipleOpen && {
              handleClick: (isOpen) => {
                return setIsExpanded(isOpen ? null : index);
              },
              expanded: index === isExpanded,
            }),
          });
        })}
      </div>
    );
  },
);

Accordion.propTypes = {
  /** Array of AccordionItems */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** allow multiple panels to be open */
  multipleOpen: PropTypes.bool,
  /** Color theme variant */
  theme: PropTypes.oneOf(['dark']),
};

Accordion.defaultProps = {
  children: <></>,
  className: '',
  multipleOpen: false,
  theme: null,
};

export default Accordion;
