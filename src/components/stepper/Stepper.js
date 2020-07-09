import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import List from '../list';

const Stepper = ({ children, className, inline, topLabels, ...others }) => {
  return (
    <nav>
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
};

Stepper.defaultProps = {
  children: <></>,
  className: '',
  inline: false,
  topLabels: false,
};

export default Stepper;
