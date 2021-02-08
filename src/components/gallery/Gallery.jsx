import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Overlay from '../overlay';

const Gallery = ({ className, items, ...others }) => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const featuredIndex = Math.round(items.length * Math.random());
    const filteredItems = items.filter((item, i) => i !== featuredIndex);
    filteredItems.unshift(items[featuredIndex]);
    setImages(filteredItems);
  }, [items]);

  return (
    <>
      <div className={classnames('atomikui-gallery', className)} {...others}>
        {images.map(({ url, caption }, i) => (
          <button
            key={`image-${i + 1}`}
            style={{ background: `no-repeat center/cover url(${url})` }}
            onClick={() => setSelectedIndex(i)}
            aria-label={`show image ${caption}`}
          />
        ))}
      </div>
      {selectedIndex !== null && (
        <Overlay
          className="atomikui-gallery-overlay"
          isActive
          onClick={() => setSelectedIndex(null)}
        >
          <div className="atomikui-gallery-overlay__image">
            <img
              src={images[selectedIndex]?.url}
              alt={images[selectedIndex]?.caption}
            />
            <div className="atomikui-gallery-overlay__caption">
              {images[selectedIndex]?.caption || images[selectedIndex]?.url}
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

Gallery.propTypes = {
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
  items: [],
  className: '',
};

export default Gallery;
