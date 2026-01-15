// src/components/staff/BookManagement.js
import React, { useState, useEffect } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const BookManagement = () => {
  // Mock data simulation - replace with real API later
  const mockBooks = [
    { id: 1, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', isbn: '978-0262033848', copies: 5 },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', copies: 3 },
    { id: 3, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', isbn: '978-0201616224', copies: 2 },
  ];

  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    copies: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate API fetch with mock data
    // In future: fetch('/api/books').then(res => res.json()).then(setBooks).catch(handleError);
    setBooks(mockBooks);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.title || !formData.author || !formData.isbn || !formData.copies) {
      setError('All fields are required.');
      return;
    }

    const copiesNum = Number(formData.copies);
    if (isNaN(copiesNum) || copiesNum < 1) {
      setError('Number of copies must be a positive integer.');
      return;
    }

    // Check for duplicate ISBN (except when editing)
    const isbnExists = books.some(
      (book) => book.isbn === formData.isbn && book.id !== editingId
    );
    if (isbnExists) {
      setError('A book with this ISBN already exists.');
      return;
    }

    if (editingId) {
      // Simulate PUT API call
      // In future: fetch(`/api/books/${editingId}`, { method: 'PUT', body: JSON.stringify({ ...formData, copies: copiesNum }) });
      setBooks(
        books.map((book) =>
          book.id === editingId ? { ...book, ...formData, copies: copiesNum } : book
        )
      );
      setEditingId(null);
    } else {
      // Simulate POST API call
      // In future: fetch('/api/books', { method: 'POST', body: JSON.stringify({ ...formData, copies: copiesNum }) });
      const newBook = {
        id: books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1,
        ...formData,
        copies: copiesNum,
      };
      setBooks([...books, newBook]);
    }

    // Reset form
    setFormData({ title: '', author: '', isbn: '', copies: '' });
  };

  const handleEdit = (book) => {
    setFormData({
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      copies: book.copies.toString(), // Convert to string for input
    });
    setEditingId(book.id);
    setError('');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book record?')) {
      // Simulate DELETE API call
      // In future: fetch(`/api/books/${id}`, { method: 'DELETE' });
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  const handleCancel = () => {
    setFormData({ title: '', author: '', isbn: '', copies: '' });
    setEditingId(null);
    setError('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Manage Book Records</h1>
      <BookForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        editingId={editingId}
        error={error}
      />
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default BookManagement;