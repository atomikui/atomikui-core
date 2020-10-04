import React, { Children, cloneElement, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';

const Header = ({
  backgroundColor,
  children,
  className,
  logoFont,
  linkColor,
  logo,
  logoText,
  logoLink,
  logoFontColor,
  logoFontSize,
  menuToggleColor,
  ...others
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const LogoElement = logoLink ? 'a' : 'span';

  return (
    <header
      className={classnames('atomikui-header', className)}
      style={{ backgroundColor }}
      {...others}
    >
      <div className="atomikui-header__logo">
        {logo}
        <LogoElement
          {...(logoLink && { href: logoLink })}
          className="atomikui-header__logo-text"
          style={{
            fontFamily: logoFont,
            fontSize: `${logoFontSize}px`,
            color: logoFontColor,
          }}
        >
          {logoText}
        </LogoElement>
      </div>
      <button
        className="atomikui-header__menu-toggle"
        aria-label="menu toggle button"
        onClick={() => {
          return setIsOpen(!isOpen);
        }}
      >
        <Icon icon={faGripLines} size="2x" color={menuToggleColor} />
      </button>
      {children && (
        <nav
          title={`main navigation ${document.querySelectorAll('nav').length}`}
          className={classnames('atomikui-header__nav', {
            'is-open': isOpen,
          })}
        >
          <ul>
            {Children.map(children, (child, index) => {
              return (
                <li key={`nav-item-${index}`}>
                  {cloneElement(child, {
                    onClick: () => {
                      return setIsOpen(!isOpen);
                    },
                    style: {
                      color: linkColor,
                    },
                  })}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

Header.propTypes = {
  /** Header background color */
  backgroundColor: PropTypes.string,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Links to rendered as navigation menu */
  children: PropTypes.node,
  /** Display font for logo text */
  logoFont: PropTypes.string,
  /** Navigation link color. Hexidecimal */
  linkColor: PropTypes.string,
  /** Logo image */
  logo: PropTypes.node,
  /** Logo text */
  logoText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Logo link */
  logoLink: PropTypes.string,
  /** Logo font color */
  logoFontColor: PropTypes.string,
  /** Logo text font size */
  logoFontSize: PropTypes.number,
  /** Menu toggle icon color */
  menuToggleColor: PropTypes.string,
};

Header.defaultProps = {
  backgroundColor: '#eceff1',
  className: '',
  children: null,
  logoFont: '',
  linkColor: '',
  logo: '',
  logoText: '',
  logoLink: '',
  logoFontColor: 'black',
  logoFontSize: 24,
  menuToggleColor: 'white',
};

export default Header;
