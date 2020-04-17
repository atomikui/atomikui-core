import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import generateId from '../../utilities/generateId';

const Breadcrumb = ({ children, classes, ...others }) => {
  return (
    <nav>
      <ol className={classnames('breadcrumb', classes, {})} {...others}>
        {Children.map(children, (child) => {
          return <li key={generateId()}>{child}</li>;
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Breadcrumb content. A list of Links */
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  classes: '',
  children: null,
};

export default Breadcrumb;
