import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ className, maxStars, selectable, stars, ...others }) => {
  const hasHalfStar = !Number.isInteger(stars) && !selectable;
  const fullStars = Math.floor(stars);

  const setRatingBaseline = (baseline) => {
    return baseline <= 5 ? baseline : 5;
  };

  const ratingBaseline = setRatingBaseline(maxStars || fullStars);

  const ratings = Array.from(Array(ratingBaseline).keys());

  const [rating, setRating] = useState(fullStars);

  return (
    <div className={classnames('rcl-rating', className)} {...others}>
      {ratings.map((index) => {
        return (
          <Icon
            className={classnames('rcl-rating__star', {
              'rcl-rating__star--selectable': selectable,
              'is-selected': selectable && index + 1 <= rating,
            })}
            key={Math.random()}
            icon={faStar}
            size="lg"
            {...(selectable && {
              onClick: () => {
                return setRating(index + 1);
              },
            })}
          />
        );
      })}
      {hasHalfStar && ratingBaseline < 5 && (
        <Icon className="rcl-rating__star" icon={faStarHalfAlt} size="lg" />
      )}
    </div>
  );
};

Rating.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** The maximum number of stars ti show */
  maxStars: PropTypes.number,
  /** Number od rating stars */
  stars: PropTypes.number,
  /** Makes stars selectable */
  selectable: PropTypes.bool,
};

Rating.defaultProps = {
  className: '',
  maxStars: null,
  stars: 0,
  selectable: false,
};

export default Rating;
