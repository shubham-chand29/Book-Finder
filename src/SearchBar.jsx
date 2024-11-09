// SearchBar.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?title=${searchTerm}`);
        const books = response.data.docs;
        // Handle the search results, e.g., update the BookList component
      } catch (error) {
        // Handle errors, e.g., display an error message
      }
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Book"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;