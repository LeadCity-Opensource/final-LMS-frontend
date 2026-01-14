import React, { useState } from 'react';

// Placeholder for LCU logo (replace with your actual logo path, e.g., '/assets/lcu-logo.png')
const imgSchoolLogo = new URL('../assets/lcu-logo-2.png', import.meta.url).href;
 // Assuming it's in public/assets/

// Dummy list of 20 recommended books (random titles for show)
const recommendedBooks = [
  "The Art of War by Sun Tzu",
  "Quantum Mechanics for Beginners",
  "Applied Geophysics Essentials",
  "Biography of Albert Einstein",
  "Introduction to Astrophysics",
  "Data Structures and Algorithms",
  "The History of Mathematics",
  "Environmental Science Today",
  "Psychology of Learning",
  "Advanced Calculus",
  "World History: Ancient Civilizations",
  "Machine Learning Basics",
  "Ethics in Technology",
  "Organic Chemistry Fundamentals",
  "Literature and Society",
  "Economics Principles",
  "Computer Networks",
  "Philosophy of Mind",
  "Statistics for Scientists",
  "Creative Writing Techniques"
];

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the search (you can add real search logic later)
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-[#eee] relative overflow-hidden">
      {/* Full-screen background with gradient overlay (similar to MainDashboard) */}
      <div className="absolute inset-0">
        <img
          alt="Background"
          src="/assets/backgroundImage.png" // Reuse your background image
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#295bac] from-[39.545%] via-[rgba(21,46,86,0.5)] to-[rgba(0,0,0,0)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        {/* Header with LCU Logo and "Books" Title */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={imgSchoolLogo}
            alt="LCU Logo"
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white">Books</h1>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex items-center bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg max-w-md">
            <input
              type="text"
              placeholder="Search for books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-lg"
            />
            <button
              type="submit"
              className="ml-4 bg-white/30 hover:bg-white/40 text-white px-4 py-2 rounded-lg transition"
            >
              Search
            </button>
          </div>
        </form>

        {/* Recommended Books Section */}
        <h2 className="text-2xl font-bold text-white mb-6">Recommended Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendedBooks.map((book, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{book}</h3>
              <p className="text-sm text-white/70">Click to view details</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}