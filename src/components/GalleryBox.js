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
            urlLarge={image.largeImageURL}
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

// export default function ImageList({ items, onClick }) {
//   return (
//     <ul className="gallery">
//       {items.map(item => (
//         <ImageGaleryItem
//           key={item.id}
//           imageURL={item.webformatURL}
//           imageTitle={item.tags}
//           imageUrlLarge={item.largeImageURL}
//           onClickItem={onClick}
//         />
//       ))}
//     </ul>
//   );
// }
