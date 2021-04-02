import React, { cloneElement, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TabItem from './components/tab-item';
import TabPanel from './components/tab-panel';

const Tabs = ({
  align,
  children,
  className,
  comparison,
  initialActiveTab,
  ...others
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const panels = [];

  return (
    <>
      <div
        className={classnames('atomikui-tabs', className, {
          [`atomikui-tabs--align-${align}`]: align,
        })}
        {...others}
      >
        {children.map((tab, index) => {
          const { content, ...props } = tab.props;

          panels.push(
            <TabPanel
              key={`tab-panel-${index + 1}`}
              isActive={index === activeTab}
            >
              {content}
            </TabPanel>,
          );

          return cloneElement(tab, {
            ...props,
            key: `tab-${index}`,
            active: index === activeTab,
            comparison,
            onClick: () => setActiveTab(index),
          });
        })}
      </div>
      {panels}
    </>
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
};

Tabs.defaultProps = {
  align: null,
  children: null,
  className: '',
  comparison: false,
  initialActiveTab: 0,
};

Tabs.Item = TabItem;
Tabs.Panel = TabPanel;

export default Tabs;
