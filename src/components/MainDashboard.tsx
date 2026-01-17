import React, { useState } from 'react';
import Sidebar from './Sidebar';  // Make sure this import is correct for your Sidebar.tsx file

// Public paths (make sure images are in public/assets/)
const imgRectangle35 = '/assets/imgRectangle35.png';
const imgRectangle36 = '/assets/imgRectangle36.png';
const imgRectangle37 = '/assets/imgRectangle37.png';
const backgroundImage = '/assets/backgroundImage.png';
const imgFace = '/assets/imgFace.png';

export default function MainDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#eee] relative overflow-hidden">
      {/* Full-screen background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          alt="Background"
          src={backgroundImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#295bac] from-[39.545%] via-[rgba(21,46,86,0.5)] to-[rgba(0,0,0,0)]" />
      </div>

      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#3b82f6] to-[#234c90] z-50 p-4 flex items-center justify-between shadow-lg">
        {/* Left side: Hamburger menu icon (3 horizontal lines) */}
        <div 
          className="cursor-pointer p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 40 40">
            <path d="M5 10H35M5 20H35M5 30H35" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Welcome text - centered at top */}
        <h2 className="absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-bold text-white">
          Welcome Barbecue Saint
        </h2>

        {/* Right side: Profile image + Matric number (side by side) */}
        <div className="flex items-center gap-4">
          <img
            src={imgFace}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <p className="text-white text-sm md:text-base opacity-80">
            LCU/AB/12/34567
          </p>
        </div>
      </div>

      {/* Main Content - Centered with padding for fixed header */}
      <div className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        {/* Sun Tzu Quote */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 text-white">
          <p className="text-xl md:text-2xl leading-relaxed mb-4">
            "Read a thousand books, and your words will flow like a river; travel a thousand miles, and your feet will gain experience."
          </p>
          <p className="text-right text-lg font-bold">— Sun Tzu</p>
        </div>

        {/* Continue Reading Section */}
        <h2 className="text-3xl font-bold text-white mb-8">Continue Reading....</h2>

        {/* Book Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Quantum Physics Card */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img
              src={imgRectangle35}
              alt="Quantum Physics"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">Quantum Physics</h3>
            </div>
          </div>

          {/* Applied Geophysics Card */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img
              src={imgRectangle36}
              alt="Applied Geophysics"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">Applied Geophysics</h3>
            </div>
          </div>

          {/* Biography Card */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img
              src={imgRectangle37}
              alt="Biography"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">Biography</h3>
            </div>
          </div>

          {/* Repeat cards as needed */}
        </div>
      </div>

      {/* Sidebar - slides in from left when icon is clicked */}
      {isSidebarOpen && (
        <div className="fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-[#1e1e1e] to-[#000] transform transition-transform duration-300 ease-in-out">
          {/* Your Sidebar component */}
          <Sidebar />

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setIsSidebarOpen(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}