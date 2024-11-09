import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
      if (response.data.docs.length > 0) {
        setBooks(response.data.docs);
        setError('');
      } else {
        setError('Book not found');
        setBooks([]);
      }
    } catch (err) {
      setError('Error fetching books');
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4 flex">
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded-lg">
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {books.map((book) => (
          <li key={book.key} className="mb-2">
            <strong>{book.title}</strong> by {book.author_name ? book.author_name.join(', ') : 'Unknown'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
