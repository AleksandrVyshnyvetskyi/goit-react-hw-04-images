import { useState, useEffect, useRef } from 'react';
import { imageApi } from 'service/imageAPI';
import { Loader } from './Loader';
import { GalleryBox } from './GalleryBox';
import { Modal } from './Modal';

export function ImageGallery({ searchName }) {
  const [images, setImages] = useState([]);
  const [newError, setNewError] = useState('');
  const prevSearchName = usePrevious(searchName);
  const [page, setPage] = useState(1);
  const prevPage = usePrevious(page);
  const [showModal, setShowModal] = useState(false);
  const [urlLarge, setUrlLarge] = useState('');
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchGallery = async (currentName, currentPage) => {
      setLoading(true);
      try {
        const result = await imageApi(currentName, currentPage);
        const images = result.hits;
        if (currentPage === 1) {
          setImages([...images]);
        } else {
          setImages(prevState => [...prevState, ...images]);
        }
      } catch (error) {
        setNewError(newError);
      } finally {
        setLoading(false);
      }
    };

    if (!searchName) {
      return;
    }
    if (page > prevPage) {
      fetchGallery(searchName, page);
      return;
    }
    if (prevSearchName !== searchName && page === prevPage) {
      fetchGallery(searchName, 1);
      resetPage();
      return;
    }
  }, [searchName, page, prevPage, prevSearchName, newError]);

  const resetPage = () => {
    setPage(1);
  };

  const openModal = (urlLarge, title) => {
    setShowModal(true);
    setUrlLarge(urlLarge);
    setTitle(title);
  };

  const closeModal = () => {
    setShowModal(false);
    setUrlLarge('');
    setTitle('');
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const imagesLenght = images.length;
  return (
    <div>
      {loading && (
        <div className="container">
          <Loader />
          <h2>Loading...</h2>
        </div>
      )}
      {searchName < 1 && (
        <div className="container">
          <h2>Enter a keyword to search!</h2>
        </div>
      )}
      {images && <GalleryBox images={images} onClick={openModal}></GalleryBox>}
      {imagesLenght > 0 && (
        <div className="container-btn">
          <button onClick={loadMore} type="button" className="Button">
            load more
          </button>
        </div>
      )}
      {showModal && (
        <Modal onClose={closeModal} urlLarge={urlLarge} dscModalImg={title} />
      )}
    </div>
  );
}
