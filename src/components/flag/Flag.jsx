import React from 'react';
import PropTypes from 'prop-types';
import { countries } from 'country-flag-icons';
import Flags from 'country-flag-icons/react/3x2';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

const Flag = ({ country, title, unicode }) => {
  const FlagIcon = Flags[country];
  return unicode ? getUnicodeFlagIcon(country) : <FlagIcon title={title} />;
};

Flag.propTypes = {
  /** Flag country */
  country: PropTypes.string,
  /** Flag title attribute */
  title: PropTypes.string,
  /** Gets the unicode version of the icon */
  unicode: PropTypes.bool,
};

Flag.defaultProps = {
  country: 'US',
  title: 'United States',
  unicode: false,
};

Flag.countries = countries;

export default Flag;
