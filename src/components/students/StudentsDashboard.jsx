
import React, { useState, useEffect } from "react";
import "./StudentsDashboard.css";
import { Link, useNavigate } from "react-router-dom";

import { getAllBooks } from "../../services/api";




// const books = [
//   { title: "Quantum Physics", img: "https://picsum.photos/200?1" },
//   { title: "Biography", img: "https://picsum.photos/200?2" },
//   { title: "Applied Geophysics", img: "https://picsum.photos/200?3" },
//   { title: "Biography", img: "https://picsum.photos/200?4" },
// ];

function StudentsDashboard() {
  const [open, setOpen] = useState(false);

  const [showHelp, setShowHelp] = useState(false);

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await getAllBooks();
        // Just show first 4 books on dashboard
        setBooks(response.data.slice(0, 4));
      } catch (error) {
        console.error("Failed to load books");
      }
    }
  
    fetchBooks();
  }, []);

  const userName = localStorage.getItem("userName") || "Student";
  const userMatric = localStorage.getItem("userMatric") || "LCU/STUDENT/001";
  const userInitial = userName.charAt(0).toUpperCase();

  

  return (
    <div className="student-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setOpen(false)}>✕</div>
        <div className="profile">
  {/* Replacing the <img> with a clean Initial Circle */}
  <div style={{
    width: '60px', 
    height: '60px', 
    backgroundColor: '#007bff', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 auto 10px'
  }}>
    {userInitial}
  </div>
  <h3>{userName}</h3>
  <p>{userMatric}</p>
</div>

        <ul>
          <li>Profile</li>
          <li>
  <Link to="/students/search" className="cursor-pointer  hover:text-white-600">
    Library
  </Link>
</li>

          <li>
            <Link to="/borrowed" className="cursor-pointer hover:text-white-600">
            Borrowed Books
            </Link>
            </li>
          
          <li>Settings</li>
          <>
  <li 
    className="cursor-pointer p-2 hover:bg-none rounded" 
    onClick={() => setShowHelp(true)}
  >
    Help
  </li>

  {/* Simple conditional rendering of a Help Alert */}
  {showHelp && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm">
        <h2 className="text-xl font-bold mb-2">Library Help</h2>
        <p className="text-gray-600 mb-4">
        If you can’t borrow a book using the library app, you’ll need to visit the library in person and bring your library card.
        </p>
        <button 
          onClick={() => setShowHelp(false)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )}
</>
        </ul>

        <button
  className="logout"
  onClick={() => {
    localStorage.clear();
    navigate("/login");
  }}
>
  Log Out
</button>

      </div>

      {/* Top Bar */}
      <div className="topbar">
  <div className="menu" onClick={() => setOpen(true)}>☰</div>
  {/* Replacing the small avatar with a matching Initial Circle */}
  <div style={{
    width: '35px', 
    height: '35px', 
    backgroundColor: '#007bff', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold'
  }}>
    {userInitial}
  </div>
</div>

      {/* Hero Section */}
      <div className="hero">
      <h1>Welcome {userName}</h1> {/* Dynamic Welcome Message */}
      <h4>{userMatric}</h4>
        <p className="quote">
          Read a thousand books, and your words will flow like a river; travel a thousand miles, and your feet will gain experience.
        </p>
        <span className="author">Sun Tzu</span>
      </div>

      {/* Continue Reading */}
      <div className="books-section">
  <h3>Available Books</h3>

  <div className="books">
    {books.map((book) => (
      <div
      key={book.id}
      className="book-card cursor-pointer flex items-center justify-center bg-black-150 rounded-md w-40 h-60 relative"
      onClick={() => navigate("/students/search")}
    >
      <span className="text-center px-2 text-gray-800 font-semibold">
        {book.title}
      </span>
    </div>
    
    ))}
  </div>
</div>
    </div>
  );
}

export default StudentsDashboard;
