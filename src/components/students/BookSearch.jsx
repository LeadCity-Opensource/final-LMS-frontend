import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { getAllBooks, searchBooks } from "../../services/api";
import logoImage from "../../Images/School Logo.png";
import backgroundImage from "../../Images/Background.png";
import BookList from "../staff/BookList";



const ITEMS_PER_PAGE = 6;

const BookSearchPage = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getAllBooks();
      setBooks(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      setError("Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (value) => {
    setQuery(value);
    if (!value.trim()) {
      fetchAllBooks();
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await searchBooks(value);
      setBooks(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  const filteredBooks = useMemo(() => {
    const searchText = query.toLowerCase();
    return books.filter((book) => {
      const title = (book.title || "").toLowerCase();
      const author = (book.author || "").toLowerCase();
      const isbn = String(book.isbn || "");
      return (
        title.includes(searchText) ||
        author.includes(searchText) ||
        isbn.includes(searchText)
      );
    });
  }, [books, query]);

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResults = filteredBooks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const groupedBooks = useMemo(() => {
    const groups = {};
    paginatedResults.forEach((book) => {
      const category = book.category?.trim() || "Uncategorized";
      if (!groups[category]) groups[category] = [];
      groups[category].push(book);
    });
    return groups;
  }, [paginatedResults]);

  return (
    <div className="min-h-screen bg-[#00E5FF] font-sans">
      {/* Header with Background */}
      <div
        className="relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-cyan-400/80 to-blue-500/30 backdrop-blur-sm"></div>
        <div className="relative z-10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-900 overflow-hidden">
                <img
                  src={logoImage}
                  alt="Lead City University Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h1 className="text-4xl font-extrabold text-black tracking-tight">
                Books
              </h1>
            </div>
            <div className="relative flex-1 max-w-50 ml-4">
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-white/70 backdrop-blur-md py-2.5 px-10 rounded-full text-sm placeholder-gray-500 focus:outline-none shadow-inner text-black"
              />
            </div>
            
          </div>
          
        </div>
      </div>
      <button
  onClick={fetchAllBooks}
  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
>
  Refresh Books
</button>

      {loading && <div className="text-center mt-10">Loading books...</div>}
      {error && <div className="text-center mt-10 text-red-600">{error}</div>}

      {/* Grouped Results */}
      <div className="px-4 pb-12">
      <BookList
  books={paginatedResults}
  showActions={false}
/>



        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSearchPage;
