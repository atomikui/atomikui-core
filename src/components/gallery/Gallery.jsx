import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shuffle from 'lodash.shuffle';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Overlay from '../overlay';
import Button from '../button';

// TODO: Addd focus trap for image modal

const Gallery = ({ className, showFeaturedImage, items, ...others }) => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const renderImage = () => {
    const id = `image-${selectedIndex}`;
    const { url } = images[selectedIndex];
    const { caption } = images[selectedIndex];

    return (
      <div className="atomikui-gallery-overlay__image">
        <Button theme="black" size="md" onClick={() => setSelectedIndex(null)}>
          <Icon icon={faTimes} size="lg" color="white" />
        </Button>
        <img src={url} alt={caption} aria-describedby={id} />
        <p id={id} className="atomikui-gallery-overlay__caption">
          {caption}
        </p>
      </div>
    );
  };

  useEffect(() => {
    setImages(shuffle(items));
  }, [items]);

  return (
    <>
      <div className={classnames('atomikui-gallery', className)} {...others}>
        {images.map(({ url, caption }, i) => (
          <button
            className={classnames({
              'is-featured': i === 0 && showFeaturedImage,
            })}
            key={`image-${i + 1}`}
            style={{ background: `no-repeat center/cover url(${url})` }}
            onClick={() => setSelectedIndex(i)}
            aria-label={`show image ${caption}`}
          />
        ))}
      </div>
      {selectedIndex !== null && (
        <Overlay className="atomikui-gallery-overlay" isActive>
          {renderImage()}
        </Overlay>
      )}
    </>
  );
};

Gallery.propTypes = {
  /** Displays a random featured image */
  showFeaturedImage: PropTypes.bool,
  /** items to be rendered in carousel */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Image URL */
      url: PropTypes.string.isRequired,
      /** Image caption */
      caption: PropTypes.string.isRequired,
    }),
  ),
  /** Specifies custom component classes. */
  className: PropTypes.string,
};

Gallery.defaultProps = {
  showFeaturedImage: false,
  items: [],
  className: '',
};

export default Gallery;
