import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books (e.g., use a default search to display on homepage)
    axios.get('https://openlibrary.org/search.json?title=book')
      .then(response => {
        setBooks(response.data.docs);
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl mb-8">All Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div key={index} className="p-4 border bg-white">
            <h2 className="text-xl">{book.title}</h2>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
