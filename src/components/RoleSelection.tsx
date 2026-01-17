import React from 'react';

interface RoleSelectionProps {
  onSelectRole: (role: 'student' | 'staff') => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="bg-[#eee] min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Top-left decorative circles - keep your original style */}
      <div className="absolute -top-40 -left-40 w-96 h-96 opacity-40 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 355 355">
          <circle cx="177.5" cy="177.5" r="177.5" fill="#4D96F4" fillOpacity="0.44" />
        </svg>
      </div>
      <div className="absolute -top-20 -left-60 w-96 h-96 opacity-50 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 355 355">
          <circle cx="177.5" cy="177.5" r="177.5" fill="#23B6FA" fillOpacity="0.59" />
        </svg>
      </div>

      {/* Main Content - Centered & Compact */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Select Your Role
        </h1>

        {/* Role Circles - Simple, colorful, clickable */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
          {/* Student */}
          <button
            onClick={() => onSelectRole('student')}
            className="group flex flex-col items-center cursor-pointer transition-transform hover:scale-105 focus:outline-none"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-400 flex items-center justify-center shadow-xl border-4 border-gray-200 group-hover:border-blue-500 transition-colors">
              <span className="text-white text-4xl font-bold">Student</span>
            </div>
            <p className="mt-6 text-3xl font-semibold text-black">Student</p>
          </button>

          {/* Staff */}
          <button
            onClick={() => onSelectRole('staff')}
            className="group flex flex-col items-center cursor-pointer transition-transform hover:scale-105 focus:outline-none"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-cyan-400 flex items-center justify-center shadow-xl border-4 border-gray-200 group-hover:border-blue-500 transition-colors">
              <span className="text-white text-4xl font-bold">Staff</span>
            </div>
            <p className="mt-6 text-3xl font-semibold text-black">Staff</p>
          </button>
        </div>
      </div>
    </div>
  );
}