import PropTypes from 'prop-types';
import { ImageGallaryItem } from './ImageGalleryItem';

export function GalleryBox({ onClick, images }) {
  return (
    <div className="container">
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGallaryItem
            key={image.id}
            imageURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            imageTitle={image.tags}
            onClickImage={onClick}
          />
        ))}
      </ul>
    </div>
  );
}

GalleryBox.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};
