/* eslint-disable sonarjs/no-duplicate-string */
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FlexItem from './components/FlexItem';

const Flex = ({
  breakpoint,
  children,
  className,
  align,
  direction,
  wrap,
  justify,
  spacing,
  ...others
}) => {
  const flexItems = Children.toArray(children).filter(
    (item) => item.type === FlexItem,
  );

  return (
    <div
      data-test-id="flex"
      className={classnames('atomikui-flex', className, {
        [`atomikui-flex--spacing-${spacing}`]: spacing,
        [`atomikui-flex--align-${align}`]: align,
        [`atomikui-flex--direction-${direction}`]: direction,
        [`atomikui-flex--justify-${justify}`]: justify,
        [`atomikui-flex--breakpoint-${breakpoint}`]: breakpoint,
        'atomikui-flex--wrap': wrap,
      })}
      {...others}
    >
      {flexItems}
    </div>
  );
};

Flex.propTypes = {
  /** Will make flex items flex: column at screen sizes below the specified breakpoint */
  breakpoint: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
  /** Flex.Item */
  children: PropTypes.node,
  /** Adds custom classes to flex parent container */
  className: PropTypes.string,
  /** Flex item alignment */
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  /** Sets whether Flex items wrap */
  wrap: PropTypes.bool,
  /** Flex direnction */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  /** Flex Item justification */
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  /** Flex item spacing */
  spacing: PropTypes.oneOf(['4', '8', '16', '24', '32', '40', '48', '56']),
};

Flex.defaultProps = {
  breakpoint: null,
  children: <></>,
  className: '',
  align: 'flex-start',
  direction: 'row',
  wrap: true,
  justify: 'flex-start',
  spacing: null,
};

Flex.Item = FlexItem;

export default Flex;
