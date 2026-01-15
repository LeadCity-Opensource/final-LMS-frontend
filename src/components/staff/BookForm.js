// src/components/staff/BookForm.js
import React from 'react';

const BookForm = ({ formData, onChange, onSubmit, onCancel, editingId, error }) => {
  return (
    <div style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{editingId ? 'Edit Book' : 'Add New Book'}</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            placeholder="e.g. JavaScript: The Good Parts"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Author: </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={onChange}
            placeholder="e.g. Douglas Crockford"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>ISBN: </label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={onChange}
            placeholder="e.g. 978-0596517748"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Number of Copies: </label>
          <input
            type="number"
            name="copies"
            value={formData.copies}
            onChange={onChange}
            min="1"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>

        <button type="submit" style={{ padding: '10px 15px', background: '#007bff', color: 'white', border: 'none', marginRight: '10px' }}>
          {editingId ? 'Update Book' : 'Add Book'}
        </button>

        {editingId && (
          <button type="button" onClick={onCancel} style={{ padding: '10px 15px', background: '#6c757d', color: 'white', border: 'none' }}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default BookForm;