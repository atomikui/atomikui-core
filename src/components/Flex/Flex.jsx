import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FlexItem from './components/FlexItem';

const Flex = ({
  children,
  className,
  align,
  direction,
  justify,
  spacing,
  ...others
}) => {
  const flexItems = Children.toArray(children).filter(
    (item) => item.type === FlexItem,
  );

  return (
    <div className={classnames('atomikui-flex', className)} {...others}>
      {flexItems}
    </div>
  );
};

Flex.propTypes = {
  /** Flex.Item */
  children: PropTypes.node,
  /** Adds custom classes to flex parent container */
  className: PropTypes.string,
  /** Flex item alignment */
  align: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
  /** Flex direnction */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  /** Flex Item justification */
  justify: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'between',
    'around',
    'evenly',
  ]),
  /** Flex item spacing */
  spacing: PropTypes.oneOf(['4', '8', '16', '24', '32', '40', '48', '56']),
};

Flex.defaultProps = {
  children: <></>,
  className: '',
  align: 'start',
  direction: 'row',
  justify: 'start',
  spacing: null,
};

Flex.Item = FlexItem;

export default Flex;
