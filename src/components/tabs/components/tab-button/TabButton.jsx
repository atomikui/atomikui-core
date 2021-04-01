import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../../button';

const TabButton = ({
  active,
  children,
  className,
  comparison,
  label,
  onClick,
  ...others
}) => (
  <Button
    theme="hollow"
    data-test-id="tab-btn"
    className={classnames('atomikui-tabs__tab', className, {
      'is-active': active,
      'is-comparison': comparison,
    })}
    onClick={onClick}
    {...others}
  >
    {label}
    {children && (
      <span className="atomikui-tabs__tab__content" data-test-id="tab-content">
        {children}
      </span>
    )}
  </Button>
);

TabButton.propTypes = {
  /** Makes a Tab active */
  active: PropTypes.bool,
  /** Tab children */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Adds comparison tab styles */
  comparison: PropTypes.bool,
  /** Tab click event callback */
  onClick: PropTypes.func,
  /** Tab label text */
  label: PropTypes.string,
};

TabButton.defaultProps = {
  active: false,
  children: null,
  className: null,
  comparison: false,
  onClick: null,
  label: '',
};

export default TabButton;
