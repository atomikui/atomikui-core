import React, { useState, useEffect, useRef } from 'react';
import debounce from 'debounce';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import useSmoothScroll from 'react-smooth-scroll-hook';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../button';

const Gallery = ({
  autoplayInterval,
  className,
  height,
  items,
  width,
  ...others
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const ref = useRef(null);

  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 65,
    direction: 'x',
  });

  const handleArrowNavigation = (e) => {
    e.preventDefault();

    if (e.key.includes('Arrow')) {
      const next =
        e.key === 'ArrowLeft' ? selectedIndex - 1 : selectedIndex + 1;
      if (next < items.length && next > -1) {
        setSelectedIndex(next);
      }
    }
  };

  useEffect(() => {
    window.onresize = debounce(() => {
      setImageWidth(ref.current.clientWidth);
    }, 200);
  }, []);

  useEffect(() => {
    setImageWidth(ref.current.clientWidth);
  }, [ref]);

  useEffect(() => {
    const isLast = selectedIndex === items.length - 1;

    scrollTo(`#image-${selectedIndex}`);

    if (autoplayInterval) {
      setTimeout(() => {
        setSelectedIndex(isLast ? 0 : selectedIndex + 1);
      }, autoplayInterval);
    }
  }, [selectedIndex, scrollTo, autoplayInterval, items]);

  return (
    <div
      className={classnames('atomikui-carousel', className)}
      {...others}
      style={{ width, height }}
    >
      <div
        ref={ref}
        className="atomikui-carousel__viewport"
        tabIndex="0"
        onKeyDown={handleArrowNavigation}
      >
        {items.map(([umgUrl, caption], index) => (
          <div
            className="atomikui-carousel__panel"
            key={`image-${index + 1}`}
            id={`image-${index}`}
            role="img"
            aria-label={caption}
            style={{
              minWidth: imageWidth,
              background: `center/cover url(${umgUrl})`,
            }}
          >
            {caption && (
              <div className="atomikui-carousel__caption">{caption}</div>
            )}
          </div>
        ))}
      </div>
      <div className="atomikui-carousel__controls">
        {selectedIndex > 0 && (
          <Button
            className="atomikui-carousel__controls__prev-btn"
            theme="hollow"
            aria-label="previous item"
            onClick={() => setSelectedIndex(selectedIndex - 1)}
          >
            <Icon icon={faChevronLeft} size="2x" color="white" />
          </Button>
        )}
        {selectedIndex < items.length - 1 && (
          <Button
            className="atomikui-carousel__controls__next-btn"
            theme="hollow"
            aria-label="next item"
            onClick={() => setSelectedIndex(selectedIndex + 1)}
          >
            <Icon icon={faChevronRight} size="2x" color="white" />
          </Button>
        )}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  /** Set duration for carousel auto advance */
  autoplayInterval: PropTypes.number,
  /** items to be rendered in carousel */
  items: PropTypes.arrayOf(PropTypes.string),
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** height of carousel */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** width of carousel */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Gallery.defaultProps = {
  autoplayInterval: null,
  items: [],
  className: '',
  height: 300,
  width: '100%',
};

export default Gallery;
