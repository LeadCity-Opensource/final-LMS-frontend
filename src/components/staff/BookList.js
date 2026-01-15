// src/components/staff/BookList.js
import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <>
      <h2>Current Book Records ({books.length})</h2>
      
      {books.length === 0 ? (
        <p>No books in the library yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f1f1f1' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Title</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Author</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>ISBN</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Copies</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{book.title}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{book.author}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{book.isbn}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{book.copies}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  <button onClick={() => onEdit(book)} style={{ marginRight: '8px', padding: '5px 10px' }}>
                    Edit
                  </button>
                  <button onClick={() => onDelete(book.id)} style={{ padding: '5px 10px', background: '#dc3545', color: 'white', border: 'none' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default BookList;