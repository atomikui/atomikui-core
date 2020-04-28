import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import useTheme from '../../themeProvider';

const Card = useTheme(
  ({ children, className, footer, theme, title, ...others }) => {
    return (
      <div
        className={classnames('rcl-card', className, {
          [`rcl-card--${theme}`]: theme,
        })}
        {...others}
      >
        {title && <div className="rcl-card__header">{title}</div>}
        {children && <div className="rcl-card__body">{children}</div>}
        {footer && <div className="rcl-card__footer">{footer}</div>}
      </div>
    );
  },
);

Card.propTypes = {
  /** Card body content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Card footer */
  footer: PropTypes.node,
  /** Color theme variant */
  theme: PropTypes.oneOf(['dark']),
  /** Card title */
  title: PropTypes.string,
};

Card.defaultProps = {
  children: <></>,
  className: '',
  footer: <></>,
  theme: null,
  title: '',
};

export default Card;
