import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ className, maxStars, onSelect, size, stars, ...others }) => {
  const hasHalfStar = !Number.isInteger(stars) && !onSelect;
  const fullStars = Math.floor(stars);

  const setRatingBaseline = (baseline) => {
    return baseline <= 5 ? baseline : 5;
  };

  const ratingBaseline = setRatingBaseline(onSelect ? maxStars : fullStars);

  const ratings = Array.from(Array(ratingBaseline).keys());

  const [rating, setRating] = useState(fullStars);

  const handleSelection = (ratingScore) => {
    setRating(ratingScore);
    onSelect(ratingScore);
  };

  return (
    <div
      className={classnames('rcl-rating', className)}
      {...others}
      aria-label={`Rating: ${stars} out of ${ratingBaseline} stars`}
    >
      {ratings.map((index) => {
        return (
          <Icon
            className={classnames('rcl-rating__star', {
              'rcl-rating__star--selectable': onSelect,
              'is-selected': onSelect && index + 1 <= rating,
            })}
            key={Math.random()}
            icon={faStar}
            aria-hidden="true"
            size={size}
            {...(onSelect && {
              onClick: () => {
                return handleSelection(index + 1);
              },
            })}
          />
        );
      })}
      {hasHalfStar && ratingBaseline < 5 && (
        <Icon className="rcl-rating__star" icon={faStarHalfAlt} size={size} />
      )}
    </div>
  );
};

Rating.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** The maximum number of stars ti show */
  maxStars: PropTypes.number,
  /** onSelect callback */
  onSelect: PropTypes.func,
  /** Star size */
  size: PropTypes.string,
  /** Number od rating stars */
  stars: PropTypes.number,
};

Rating.defaultProps = {
  className: '',
  maxStars: 5,
  onSelect: null,
  size: null,
  stars: 0,
};

export default Rating;
