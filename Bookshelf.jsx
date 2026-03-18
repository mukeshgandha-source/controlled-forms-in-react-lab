import { useState } from 'react';

const Bookshelf = () => {
  // 1. Books ki list ke liye state (Initial 2 books ke saath)
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  // 2. Form inputs ke liye state
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  // 3. Input change handle karne wala function
  const handleInputChange = (event) => {
    // Dynamic key use karke title ya author update karega
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  // 4. Form submit hone par book add karne wala function
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]); // Purani list + naya object
    setNewBook({ title: '', author: '' }); // Form khali kar do
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;