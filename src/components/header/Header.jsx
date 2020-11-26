import React, { Children, cloneElement, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import hexColorChecker from '../../utilities/hexColorChecker';

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

  const hasDarkBackground = hexColorChecker(backgroundColor) === 'dark';

  return (
    <header
      className={classnames('atomikui-header', className, {
        'has-dark-bg': hasDarkBackground,
      })}
      style={{ backgroundColor }}
      {...others}
    >
      <div className="atomikui-header__logo">
        <LogoElement
          {...(logoLink && { href: logoLink })}
          className="atomikui-header__logo-content"
          data-test-id="logo-content"
          style={{
            fontFamily: logoFont,
            fontSize: `${logoFontSize}px`,
            color: logoFontColor,
          }}
        >
          {logo}
          {logoText}
        </LogoElement>
      </div>
      <button
        data-test-id="header-menu-toggle"
        className="atomikui-header__menu-toggle"
        aria-label="menu toggle button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon icon={faGripLines} size="2x" color={menuToggleColor} />
      </button>
      {children && (
        <nav
          aria-label={`main navigation ${
            document.querySelectorAll('nav').length
          }`}
          className={classnames('atomikui-header__nav', {
            'is-open': isOpen,
          })}
          data-test-id="header-nav"
        >
          <ul>
            {Children.map(children, (child, index) => (
              <li key={`nav-item-${index + 1}`}>
                {cloneElement(child, {
                  onClick: () => setIsOpen(!isOpen),
                  style: {
                    color: linkColor,
                  },
                })}
              </li>
            ))}
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
  menuToggleColor: 'black',
};

export default Header;
