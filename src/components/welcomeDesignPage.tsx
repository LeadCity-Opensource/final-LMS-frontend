import React from 'react';

// Public folder paths (Vite serves these directly)
const imgFace = '/assets/imgFace.png';

export default function WelcomeDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3b82f6] to-[#234c90] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Profile Image - centered at top */}
      <div className="relative z-10 mb-8 md:mb-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img
            alt="User profile - Barbecue Seint"
            src={imgFace}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Welcome Text - centered, responsive */}
      <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-['Poppins:ExtraBold',sans-serif] text-white text-opacity-80 text-center leading-tight px-4">
        Welcome Barbecue Seint
      </h1>
    </div>
  );
}