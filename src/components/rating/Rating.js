import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ className, label, stars, ...others }) => {
  const hasHalfStar = !Number.isInteger(stars);
  const fullStars = Math.floor(stars);
  const ratingColor = '#faca1b';

  return (
    <div className={classnames('rcl-rating', className)} {...others}>
      {Array(fullStars).fill(<Icon icon={faStar} color={ratingColor} />)}
      {hasHalfStar && <Icon icon={faStarHalfAlt} color={ratingColor} />}
      <span className="margin-left-8">{label}</span>
    </div>
  );
};

Rating.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Label deslayed with rating */
  label: PropTypes.string,
  /** Number od rating stars */
  stars: PropTypes.number,
};

Rating.defaultProps = {
  className: '',
  label: '',
  stars: 0,
};

export default Rating;
