import React, { Children, cloneElement, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({
  align,
  children,
  className,
  inverse,
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
      className={classnames('rcl-tabs', className, {
        [`rcl-tabs--align-${align}`]: align,
        [`rcl-tabs--inverse`]: inverse,
      })}
      {...others}
    >
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          inverse,
          active: index === activeTab,
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
  /** Set the tabs theme as inverse */
  inverse: PropTypes.bool,
  /** The inital active tab */
  initialActiveTab: PropTypes.number,
  /** onChange callback */
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  align: null,
  children: <></>,
  className: '',
  inverse: false,
  initialActiveTab: 0,
  onChange() {},
};

export default Tabs;
