import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import List from '../list';
import ListItem from '../list-item';

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
  ...others
}) => {
  const LogoElement = logoLink ? 'a' : 'span';
  return (
    <header
      className={classnames('atomikui-header', className)}
      style={{ backgroundColor }}
      {...others}
    >
      <div className="atomikui-header__logo">
        {logo}{' '}
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
      {children && (
        <nav title="main navigation" className="atomikui-header__nav">
          <List type="horizontal">
            {Children.map(children, (child, index) => {
              return (
                <ListItem key={`nav-item-${index}`}>
                  {cloneElement(child, { style: { color: linkColor } })}
                </ListItem>
              );
            })}
          </List>
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
  logoFontSize: PropTypes.string,
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
};

export default Header;
