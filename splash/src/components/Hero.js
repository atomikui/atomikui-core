import React from 'react';
import PropTypes from 'prop-types';
import AtomikUILogo from './AtomikUILogo';

const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <AtomikUILogo size={170} />
        <div>
          <h1 className="hero__title">{title}</h1>
          <h2 className="hero__subtitle">{subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
