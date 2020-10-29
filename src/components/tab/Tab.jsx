import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';

const Tab = ({
  active,
  children,
  className,
  comparison,
  label,
  onClick,
  ...others
}) => {
  return (
    <Button
      theme="hollow"
      data-test-id="tab-btn"
      className={classnames('atomikui-tab', className, {
        'is-active': active,
        'atomikui-tab--comparison': comparison,
      })}
      onClick={onClick}
      {...others}
    >
      {label}
      {children && (
        <span className="atomikui-tab__content" data-test-id="tab-content">
          {children}
        </span>
      )}
    </Button>
  );
};

Tab.propTypes = {
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

Tab.defaultProps = {
  active: false,
  children: null,
  className: null,
  comparison: false,
  onClick: null,
  label: '',
};

export default Tab;
