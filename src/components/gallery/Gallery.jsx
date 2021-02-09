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
  const [images, setImages] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [cachedImages, setCachedImages] = useState([]);

  const showImageModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  useEffect(() => {
    setImages(
      shuffle(items).map(({ url, caption }, index) => ({
        id: `image-${index + 1}`,
        image: <img key={`image-${index + 1}`} src={url} alt={caption} />,
        url,
        caption,
      })),
    );
  }, [items]);

  return images ? (
    <>
      <div className={classnames('atomikui-gallery', className)} {...others}>
        {images.map(({ url, caption }, index) => (
          <button
            className={classnames({
              'is-featured': index === 0 && showFeaturedImage,
            })}
            key={`image-${index + 1}`}
            style={{ background: `no-repeat center/cover url(${url})` }}
            onClick={() => showImageModal(index)}
            aria-label={`show image ${caption}`}
          />
        ))}
      </div>
      <Overlay className="atomikui-gallery-overlay" isActive={showModal}>
        <div className="atomikui-gallery-overlay__image">
          <Button theme="black" size="md" onClick={() => setShowModal(false)}>
            <Icon icon={faTimes} size="lg" color="white" />
          </Button>
          {images[selectedIndex].image}
          <p
            id={images[selectedIndex].id}
            className="atomikui-gallery-overlay__caption"
          >
            {images[selectedIndex].caption}
          </p>
        </div>
      </Overlay>
    </>
  ) : null;
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
