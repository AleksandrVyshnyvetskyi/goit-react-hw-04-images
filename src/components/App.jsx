import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";


export  function App() {
  const [searchName, setSearchName] = useState('');

  const handlFormSubmit = searchName => {
    setSearchName(searchName);
  }

  return (
    <div className="App">
      <Searchbar onSubmit={handlFormSubmit}/>
      <ImageGallery searchName={searchName}/>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
    )
  }