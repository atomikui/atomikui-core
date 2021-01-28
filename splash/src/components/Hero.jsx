import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@atomikui/core';
import AtomikUILogo from './AtomikUILogo';

const Hero = ({ title, subtitle, btnLink }) => (
  <div className="hero">
    <div className="hero__content">
      <AtomikUILogo size={125} />
      <div>
        <h1 className="hero__title">{title}</h1>
        <h2 className="hero__subtitle">{subtitle}</h2>
        <Link className="hero__btn" href={btnLink}>
          get started
        </Link>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  btnLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
