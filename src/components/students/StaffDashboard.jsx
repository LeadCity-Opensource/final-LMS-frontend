
// import React, { useState, useEffect } from "react";
// import "./StaffDashboard.css";
// import { Link } from "react-router-dom";
// import { getAllBooks } from "../../services/api";
// import { useNavigate } from "react-router-dom";
// import { getAllBooks } from "../../services/api";



// function StaffDashboard() {
//   const [open, setOpen] = useState(false);
//   const [books, setBooks] = useState([]);
// const navigate = useNavigate();


// useEffect(() => {
//   async function fetchBooks() {
//     try {
//       const response = await getAllBooks();
//       // Just show first 4 books on dashboard
//       setBooks(response.data.slice(0, 4));
//     } catch (error) {
//       console.error("Failed to load books");
//     }
//   }

//   fetchBooks();
// }, []);


//   return (
//     <div className="student-dashboard">
//       {/* Sidebar */}
//       <div className={`sidebar ${open ? "open" : ""}`}>
//         <div className="close-btn" onClick={() => setOpen(false)}>✕</div>
//         <div className="profile">
//           <img src="https://i.pravatar.cc/100" alt="profile" />
//           <h3>Barbecue Saint</h3>
//           <p>UID: STUDENT_BY15</p>
//         </div>

//         <ul>
//           <li>Profile</li>
//           <li className="relative group">
//   <span className="flex items-center gap-1 cursor-pointer hover:text-white-600">
//     Library
//     <span className="text-sm">▼</span>
//   </span>

//   <ul className="absolute left-0 mt-2 w-40 bg-black/80 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
//     <li>
//       <Link
//         to="/students/search"
//         className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
//       >
//         Books
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/borrowed"
//         className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
//       >
//         Borrowed Books
//       </Link>
//     </li>
//   </ul>
// </li>



//           <li>Borrowed Books</li>
//           <li>Downloads</li>
//           <li>History</li>
//           <li>Settings</li>
//           <li>Help</li>
//         </ul>

//         <button className="logout">Log Out</button>
//       </div>

//       {/* Top Bar */}
//       <div className="topbar">
//         <div className="menu" onClick={() => setOpen(true)}>☰</div>
//         <img src="https://i.pravatar.cc/40" alt="avatar" />
//       </div>

//       {/* Hero Section */}
//       <div className="hero">
//         <h1>Welcome Barbecue saint</h1>
//         <h4>LCU/AB/12/34567</h4>
//         <p className="quote">
//           Read a thousand books, and your words will flow like a river; travel a thousand miles, and your feet will gain experience.
//         </p>
//         <span className="author">Sun Tzu</span>
//       </div>

//       {/* Continue Reading */}
//       <div className="books-section">
//   <h3>Available Books</h3>

//   <div className="books">
//     {books.map((book) => (
//       <div
//         key={book.id}
//         className="book-card cursor-pointer"
//         onClick={() => navigate("/students/search")}
//       >
//         <img
//           src={book.cover || "https://via.placeholder.com/150"}
//           alt={book.title}
//         />
//         <p>{book.title}</p>
//       </div>
//     ))}
//   </div>
// </div>

//     </div>
//   );
// }

// export default StaffDashboard;
