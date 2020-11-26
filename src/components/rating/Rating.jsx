import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ className, maxStars, onSelect, size, stars, ...others }) => {
  const hasHalfStar = !Number.isInteger(stars) && !onSelect;
  const fullStars = Math.floor(stars);

  const setRatingBaseline = (baseline) => (baseline <= 5 ? baseline : 5);

  const ratingBaseline = setRatingBaseline(onSelect ? maxStars : fullStars);

  const ratings = Array.from(Array(ratingBaseline).keys());

  const [rating, setRating] = useState(fullStars);

  const handleSelection = (ratingScore) => {
    setRating(ratingScore);
    onSelect(ratingScore);
  };

  return (
    <div
      data-test-id="rating"
      className={classnames('atomikui-rating', className)}
      {...others}
      aria-label={`Rating: ${stars} out of ${ratingBaseline} stars`}
    >
      {ratings.map((index) => (
        <Icon
          className={classnames('atomikui-rating__star', {
            'atomikui-rating__star--selectable': onSelect,
            'is-selected': onSelect && index + 1 <= rating,
          })}
          key={shortid.generate()}
          icon={faStar}
          aria-hidden="true"
          size={size}
          onClick={onSelect ? () => handleSelection(index + 1) : null}
        />
      ))}
      {hasHalfStar && ratingBaseline < 5 && (
        <Icon
          className="atomikui-rating__star"
          icon={faStarHalfAlt}
          size={size}
        />
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
