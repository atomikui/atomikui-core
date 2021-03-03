/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shuffle from 'lodash.shuffle';
import FocusTrap from 'focus-trap-react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Overlay from '../overlay';
import Button from '../button';

const Gallery = ({
  borderColor,
  className,
  showFeaturedImage,
  items,
  randomize,
  ...others
}) => {
  const [images, setImages] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const showImageModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  useEffect(() => {
    setImages(
      (randomize ? shuffle(items) : items).map(({ url, caption }, index) => {
        const id = `image-${index + 1}`;
        return {
          id,
          index,
          url,
          caption,
          image: <img key={id} src={url} alt={caption} aria-describedby={id} />,
          button: (
            <button
              className={classnames({
                'is-featured': index === 0 && showFeaturedImage,
              })}
              key={id}
              style={{
                background: `no-repeat center/cover url(${url})`,
                border: borderColor ? `1px solid ${borderColor}` : null,
              }}
              onClick={() => showImageModal(index)}
              aria-label={`show image ${index + 1}`}
            />
          ),
        };
      }),
    );
  }, [borderColor, items, showFeaturedImage, randomize]);

  return images ? (
    <>
      <div className={classnames('atomikui-gallery', className)} {...others}>
        {images.map(({ button }) => button)}
      </div>
      <Overlay className="atomikui-gallery-modal" isActive={showModal}>
        {showModal ? (
          <FocusTrap>
            <div className="atomikui-gallery-modal__dialog">
              <div className="atomikui-gallery-modal__header">
                <div id={images[selectedIndex].id}>
                  {images[selectedIndex].caption}
                </div>
                <Button
                  data-testid="overlay-close-btn"
                  theme="hollow"
                  size="md"
                  aria-label="close modal"
                  onClick={() => setShowModal(false)}
                >
                  <Icon icon={faTimes} size="2x" color="#455a64" />
                </Button>
              </div>
              <div className="atomikui-gallery-modal__body" tabIndex="0">
                {images.map(({ image, index }) =>
                  cloneElement(image, {
                    style: {
                      'aria-describedby': images[selectedIndex].id,
                      display: index === selectedIndex ? 'block' : 'none',
                    },
                  }),
                )}
              </div>
            </div>
          </FocusTrap>
        ) : null}
      </Overlay>
    </>
  ) : null;
};

Gallery.propTypes = {
  /** Defines the color of the image borderes. E.g. #fff or white */
  borderColor: PropTypes.string,
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** items to be rendered in carousel */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Image URL */
      url: PropTypes.string.isRequired,
      /** Image caption */
      caption: PropTypes.string.isRequired,
    }),
  ),
  /** Randomizes images */
  randomize: PropTypes.bool,
  /** Displays a random featured image */
  showFeaturedImage: PropTypes.bool,
};

Gallery.defaultProps = {
  borderColor: '',
  className: '',
  items: [],
  randomize: false,
  showFeaturedImage: false,
};

export default Gallery;
