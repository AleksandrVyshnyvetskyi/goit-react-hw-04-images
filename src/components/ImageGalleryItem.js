import PropTypes from 'prop-types';

export const ImageGallaryItem = ({
  imageURL,
  imageTitle,
  urlLarge,
  onClickImage,
}) => {
  return (
    <li
      className="ImageGalleryItem "
      onClick={() => {
        onClickImage(urlLarge, imageTitle);
      }}
    >
      <img src={imageURL} alt={imageTitle} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGallaryItem.propTypes = {
  onClick: PropTypes.func,
  imgURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  imgTitle: PropTypes.string,
};

// export function ImageGallaryItem({
//   imageURL,
//   imageTitle,
//   imageUrlLarge,
//   onClickItem,
// }) {
//   return (
//     <li
//       className="gallery-item"
//       onClick={() => {
//         onClickItem(imageUrlLarge, imageTitle);
//       }}
//     >
//       <img src={imageURL} alt={imageTitle} />
//     </li>
//   );
// }

// ====================================================

// export const ImageGallaryItem = ({
//   imgURL,
//   imgTitle,
//   largeImageURL,
//   onClick,
// }) => {
//   return (
//     <li
//       className="ImageGalleryItem "
//       onClick={() => {
//         onClick({ largeImageURL, imgTitle });
//       }}
//     >
//       <img src={imgURL} alt={imgTitle} className="ImageGalleryItem-image" />
//     </li>
//   );
// };

// ImageGallaryItem.propTypes = {
//   onClick: PropTypes.func,
//   imgURL: PropTypes.string,
//   largeImageURL: PropTypes.string,
//   imgTitle: PropTypes.string,
// };
