import React from 'react';

const imgSchoolLogo = new URL('../assets/lcu-logo-2.png', import.meta.url).href;

function LoginButton({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <button
      onClick={onGetStarted}
      className="mt-8 bg-[#3b82f6] hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg transition transform hover:scale-105"
    >
      Get Started
    </button>
  );
}

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="bg-[#eee] relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Top-Left Decorative Circles - Exact Figma bleed-off style */}
      <div className="absolute -top-32 -left-32 w-96 h-96 opacity-40 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 355 355">
          <circle cx="177.5" cy="177.5" r="177.5" fill="#4D96F4" fillOpacity="0.44" />
        </svg>
      </div>
      <div className="absolute -top-20 -left-52 w-96 h-96 opacity-50 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 355 355">
          <circle cx="177.5" cy="177.5" r="177.5" fill="#23B6FA" fillOpacity="0.59" />
        </svg>
      </div>

      {/* Main Content - Compact & Centered */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        <img
          alt="Lead City University Logo"
          src={imgSchoolLogo}
          className="w-32 h-32 md:w-40 md:h-40 object-contain mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Library Manager
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Owner's workspace...
        </p>

        <LoginButton onGetStarted={onGetStarted} />
      </div>
    </div>
  );
}