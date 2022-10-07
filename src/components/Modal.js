// import { Component } from 'react';
// import { createPortal } from 'react-dom';

// const root = document.getElementById('root');
// export class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.closeModal);
//   }
//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.closeModal);
//   }

//   closeModal = event => {
//     if (event.code === 'Escape' || event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL, imgTitle } = this.props.content;
//     return createPortal(
//       <div className="Overlay" onClick={this.closeModal}>
//         <div className="Modal">
//           <img src={largeImageURL} alt={imgTitle} className="Modal-img" />
//           <p className="Modal-text">{imgTitle}</p>
//         </div>
//       </div>,
//       root
//     );
//   }
// }

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const root = document.getElementById('root');

export function Modal({ onClose, urlLarge, dscModalImg }) {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      onClose();
    }
  };

  console.log(urlLarge);

  return createPortal(
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={urlLarge} alt={dscModalImg} className="Modal-img" />
        <p className="Modal-text">{dscModalImg}</p>
      </div>
    </div>,
    root
  );
}
