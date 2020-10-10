import React, { cloneElement, Children, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({
  align,
  children,
  className,
  comparison,
  initialActiveTab,
  onChange,
  ...others
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleChange = (index) => {
    setActiveTab(index);
    onChange(index);
  };

  return (
    <div
      className={classnames('atomikui-tabs', className, {
        [`atomikui-tabs--align-${align}`]: align,
      })}
      {...others}
    >
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          active: index === activeTab,
          comparison,
          onClick: () => {
            return handleChange(index);
          },
        });
      })}
    </div>
  );
};

Tabs.propTypes = {
  /** Sets the alignment of the Tabs children */
  align: PropTypes.oneOf(['center', 'right', 'stretch']),
  /** Children to be rendered as tabs */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Adds comparison variant styles */
  comparison: PropTypes.bool,
  /** The inital active tab */
  initialActiveTab: PropTypes.number,
  /** onChange callback */
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  align: null,
  children: null,
  className: '',
  comparison: false,
  initialActiveTab: 0,
  onChange() {},
};

export default Tabs;
