import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Footer = ({
  backgroundColor,
  children,
  className,
  copyrightText,
  copyrightYear,
  copyrightEntity,
  linkColor,
  logo,
  navBackgroundColor,
  textColor,
  ...others
}) => {
  return (
    <footer
      className={classnames('atomikui-footer', className)}
      style={{ backgroundColor, color: textColor }}
      {...others}
    >
      <nav
        aria-label={`auxiliary nav ${document.querySelectorAll('nav').length}`}
        style={{ backgroundColor: navBackgroundColor }}
      >
        <ul>
          {Children.map(children, (link, index) => {
            return (
              <li key={`auxiliary-navitem-${index + 1}`}>
                {cloneElement(link, { style: { color: linkColor } })}
              </li>
            );
          })}
        </ul>
      </nav>
      {logo}
      <p>
        &copy; {copyrightYear} {copyrightEntity && `${copyrightEntity}.`}{' '}
        {copyrightText}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  /** Footer background color */
  backgroundColor: PropTypes.string,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Child elements tobe rendered as links */
  children: PropTypes.node,
  /** Year of applicable copyright */
  copyrightYear: PropTypes.string,
  /** Text to be displayed with copyright */
  copyrightText: PropTypes.string,
  /** A company, businessm or person applicable to copyright */
  copyrightEntity: PropTypes.string,
  /** Navigation link color */
  linkColor: PropTypes.string,
  /** Nav menu background coloe */
  navBackgroundColor: PropTypes.string,
  /** Logo image */
  logo: PropTypes.node,
  /** Footer text color */
  textColor: PropTypes.string,
};

Footer.defaultProps = {
  backgroundColor: '#eceff1',
  children: null,
  className: '',
  copyrightYear: new Date().getFullYear().toString(),
  copyrightText: 'All rights reserved.',
  copyrightEntity: '',
  linkColor: '',
  logo: null,
  navBackgroundColor: 'transparent',
  textColor: '',
};

export default Footer;
