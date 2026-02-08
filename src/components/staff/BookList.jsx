import React from "react";
import { useNavigate } from "react-router-dom";


const BookList = ({
  books = [],
  onEdit,
  onDelete,
  showActions = false
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Books ({books.length})
      </h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-400 py-10">
          No books found
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-600">
                <th className="p-3">Title</th>
                <th className="p-3">Author</th>
                <th className="p-3">ISBN</th>
                <th className="p-3">Category</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Available</th>
                {showActions && <th className="p-3">Actions</th>}
              </tr>
            </thead>

            <tbody>
              {books.map((book) => (
                <tr
                  key={book.id}
                  className="border-b hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => navigate(`/bookdetails/:id/${book.id}`)}
                >
                  <td className="p-3 font-semibold text-gray-800">
                    {book.title}
                  </td>
                  <td className="p-3 text-gray-700">{book.author}</td>
                  <td className="p-3 text-gray-600">{book.isbn}</td>
                  <td className="p-3 text-gray-600">{book.category}</td>
                  <td className="p-3">{book.quantity}</td>
                  <td className="p-3 font-bold text-blue-700">
                    {book.available}
                  </td>

                  {showActions && (
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => onEdit(book)}
                        className="px-3 py-1 rounded bg-blue-500 text-white text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(book.id)}
                        className="px-3 py-1 rounded bg-red-500 text-white text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookList;
