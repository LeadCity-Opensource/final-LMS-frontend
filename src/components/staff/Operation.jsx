import { useState } from "react";
import initialBooks from "../../mockdata/Books";

function Operation() {
  const [books, setBooks] = useState(initialBooks);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
  });
  const [editId, setEditId] = useState(null);

  // Handle input change
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Add or Update book
  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      // Edit
      setBooks(
        books.map((book) =>
          book.id === editId ? { ...book, ...formData } : book
        )
      );
      setEditId(null);
    } else {
      // Add
      setBooks([...books, { id: Date.now(), ...formData }]);
    }

    setFormData({ title: "", author: "", year: "" });
  }

  // Edit button
  function handleEdit(book) {
    setFormData(book);
    setEditId(book.id);
  }

  // Delete button
  function handleDelete(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <div>
      <h2>Manage Books</h2>

      {/* Add/Edit Form */}

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
        />
        <button type="submit">{editId ? "Update Book" : "Add Book"}</button>
      </form>

      <hr />

      {/* Book List */}

      {books.map((book) => (
        <div key={book.id} style={{ marginBottom: "10px" }}>
          <strong>{book.title}</strong> – {book.author} ({book.year})
          <br />
          <button onClick={() => handleEdit(book)}>Edit</button>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Operation;
