import React, { Children, cloneElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import sample from 'lodash.sample';
import shuffle from 'lodash.shuffle';

const Randomize = ({ children, duration }) => {
  const [isPaused, setIsPaused] = useState(false);

  const getRandomItem = (arr) => {
    return sample(shuffle(arr));
  };

  const content = Children.map(children, (child) => {
    return cloneElement(child, {
      tabIndex: '0',
      onFocus: () => {
        return setIsPaused(true);
      },
      onBlur: () => {
        return setIsPaused(false);
      },
      onMouseEnter: () => {
        return setIsPaused(true);
      },
      onMouseLeave: () => {
        return setIsPaused(false);
      },
    });
  });

  const [child, setChild] = useState(getRandomItem(content));

  let timer;

  useEffect(() => {
    if (isPaused) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        setChild(getRandomItem(content));
      }, duration);
    }

    return () => {
      return clearInterval(timer);
    };
  }, [isPaused]);

  return <>{child}</>;
};

Randomize.propTypes = {
  /** Content to be randomized */
  children: PropTypes.node,
  /** Sets the time interval for randomized content */
  duration: PropTypes.number,
};

Randomize.defaultProps = {
  children: <></>,
  duration: 2000,
};

export default Randomize;
