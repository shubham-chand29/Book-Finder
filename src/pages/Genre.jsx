const Genre = () => {
    const genres = ['Action', 'Romantic', 'Fantasy', 'Horror', 'Comedy', 'Drama','Cooking','Schlool Life','Mystery','Sports'];
  
    return (
      <div className="p-8">
        <h1 className="text-4xl mb-8">Genres</h1>
        <ul>
          {genres.map((genre, index) => (
            <li key={index} className="hover:bg-gray-200 p-2">{genre}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Genre;
  