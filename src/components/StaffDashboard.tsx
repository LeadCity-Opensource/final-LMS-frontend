import React, { useState } from 'react';

const imgSchoolLogo = new URL('../assets/lcu-logo-2.png', import.meta.url).href;

interface StaffDashboardProps {
  onBackToLogin?: () => void;  // ← Add this prop (same as student)
}

export default function StaffDashboard({ onBackToLogin }: StaffDashboardProps) {
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Staff Sign Up Data:', { fullName, idNumber, email, password });

    // Go back to login page
    if (onBackToLogin) {
      onBackToLogin();  // ← This takes you back to login (step 2)
    }
  };

  return (
    <div className="bg-[#eee] min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Top-left decorative circles */}
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

      {/* Main Staff Sign-up Form - Centered & Compact */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Logo at top */}
        <div className="flex justify-center mb-6">
          <img
            alt="Lead City University Logo"
            src={imgSchoolLogo}
            className="w-28 h-28 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-black text-center mb-8">
          Staff Sign Up
        </h1>

        {/* Form */}
        <form className="space-y-5">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            required
          />

          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            placeholder="ID Number"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            required
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            required
          />

          {/* Sign Up Button - now goes back to login */}
          <button
            type="button"  // ← Changed to button (not submit)
            onClick={handleSignUp}  // ← Calls handleSignUp
            className="w-full bg-[#3b82f6] hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-bold shadow-lg transition transform hover:scale-105 mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account? Sign in */}
        <p className="text-center text-base text-gray-600 mt-4">
          Already have an account?{' '}
          <span 
            className="font-bold text-blue-600 underline cursor-pointer hover:text-blue-800 transition"
            onClick={onBackToLogin}  // ← Already there for "Sign in" link
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}