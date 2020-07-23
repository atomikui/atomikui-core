import React, { Children, cloneElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Randomize = ({ children, duration }) => {
  const [isPaused, setIsPaused] = useState(false);

  const getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
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
      console.log('timer stopped');
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        console.log('timer started');
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
