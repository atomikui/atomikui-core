import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Breadcrumb = ({ children, className, ...others }) => {
  return (
    <nav>
      <ol
        className={classnames('atomikui-breadcrumb', className, {})}
        {...others}
      >
        {Children.map(children, (child) => {
          return <li key={shortid.generate()}>{child}</li>;
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Breadcrumb content. A list of Links */
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  className: '',
  children: <></>,
};

export default Breadcrumb;
