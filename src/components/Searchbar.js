import { useState } from 'react';
import { toast } from 'react-toastify';

export function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const hendleSearchChange = event => {
    const { value } = event.target;
    setSearchName(value);
  };

  const hendleSubmit = event => {
    event.preventDefault();
    if (searchName.trim() === '') {
      toast.error('Enter a keyword to search!');
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={hendleSubmit}>
        <button type="submit" className="SearchForm-button" />
        <input
          className="SearchForm-input"
          onChange={hendleSearchChange}
          name="searchName"
          value={searchName}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
