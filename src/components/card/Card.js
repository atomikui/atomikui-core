import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ThemeContext from '../../themeContext';

const Card = ({ children, className, footer, title, ...others }) => {
  const { theme } = useContext(ThemeContext);

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
};

Card.propTypes = {
  /** Card body content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Card footer */
  footer: PropTypes.node,
  /** Card title */
  title: PropTypes.string,
};

Card.defaultProps = {
  children: <></>,
  className: '',
  footer: <></>,
  title: '',
};

export default Card;
