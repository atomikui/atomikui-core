import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import List from '../list';

const Stepper = ({
  children,
  className,
  inline,
  topLabels,
  title,
  ...others
}) => {
  return (
    <nav title={title || `stepper ${shortid.generate()}`}>
      <List
        className={classnames('atomikui-stepper', className, {
          'atomikui-stepper--inline': inline,
        })}
        {...others}
      >
        {topLabels
          ? Children.map(children, (child) => {
              return cloneElement(child, { topLabel: true });
            })
          : children}
      </List>
    </nav>
  );
};

Stepper.propTypes = {
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Makes a stepper and its labels inline */
  inline: PropTypes.bool,
  /** Specifies stepper to have labels above step number */
  topLabels: PropTypes.bool,
  /** Title that gets assigned to breadcrumb <nav /> */
  title: PropTypes.string,
};

Stepper.defaultProps = {
  children: <></>,
  className: '',
  inline: false,
  topLabels: false,
  title: '',
};

export default Stepper;
