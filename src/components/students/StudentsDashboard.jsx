
import React, { useState } from "react";
import "./StudentsDashboard.css";
import { Link, useNavigate } from "react-router-dom";




const books = [
  { title: "Quantum Physics", img: "https://picsum.photos/200?1" },
  { title: "Biography", img: "https://picsum.photos/200?2" },
  { title: "Applied Geophysics", img: "https://picsum.photos/200?3" },
  { title: "Biography", img: "https://picsum.photos/200?4" },
];

function StudentsDashboard() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="student-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setOpen(false)}>✕</div>
        <div className="profile">
          <img src="https://i.pravatar.cc/100" alt="profile" />
          <h3>Barbecue Saint</h3>
          <p>UID: STUDENT_BY15</p>
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
          To borrow a book, click on the book title. For ISBN issues, contact the admin.
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
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  }}
>
  Log Out
</button>

      </div>

      {/* Top Bar */}
      <div className="topbar">
        <div className="menu" onClick={() => setOpen(true)}>☰</div>
        <img src="https://i.pravatar.cc/40" alt="avatar" />
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome Barbecue saint</h1>
        <h4>LCU/AB/12/34567</h4>
        <p className="quote">
          Read a thousand books, and your words will flow like a river; travel a thousand miles, and your feet will gain experience.
        </p>
        <span className="author">Sun Tzu</span>
      </div>

      {/* Continue Reading */}
      <div className="books-section">
        <h3>Continue Reading...</h3>
        <div className="books">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.img} alt={book.title} />
              <p>{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentsDashboard;
