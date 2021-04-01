import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import List from '../list';
import StepperItem from './components/stepper-item';

const Stepper = ({
  children,
  className,
  inline,
  topLabels,
  title,
  ...others
}) => (
  <nav title={title || `stepper ${shortid.generate()}`}>
    <List
      data-test-id="stepper"
      className={classnames('atomikui-stepper', className, {
        'is-inline': inline,
      })}
      {...others}
    >
      {topLabels
        ? Children.map(children, (child) =>
            cloneElement(child, { topLabel: true }),
          )
        : children}
    </List>
  </nav>
);

Stepper.propTypes = {
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Steps */
  children: PropTypes.node,
  /** Makes a stepper and its labels inline */
  inline: PropTypes.bool,
  /** Specifies stepper to have labels above step number */
  topLabels: PropTypes.bool,
  /** Title that gets assigned to breadcrumb <nav /> */
  title: PropTypes.string,
};

Stepper.defaultProps = {
  children: null,
  className: '',
  inline: false,
  topLabels: false,
  title: '',
};

Stepper.Item = StepperItem;

export default Stepper;
