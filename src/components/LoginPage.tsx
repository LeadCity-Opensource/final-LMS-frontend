import React, { useState } from 'react';

const imgSchoolLogo = new URL('../assets/lcu-logo-2.png', import.meta.url).href;

interface LoginPageProps {
  onLogin: () => void;
  onSignUp: () => void;
  onBackToLogin?: () => void;
}

export default function LoginPage({ onLogin, onSignUp }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    onLogin();
  };

  return (
    <div className="bg-[#eee] min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Top-left decorative circles - compact */}
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

      {/* Main login form - centered & compact */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            alt="Lead City University Logo"
            src={imgSchoolLogo}
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-black text-center mb-2">
          Library Manager
        </h1>

        <p className="text-xl text-gray-700 text-center mb-10">
          Owner's workspace...
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Input */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username or Matric number"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
          </div>

          {/* Log in Button */}
          <button
            type="submit"
            className="w-full bg-[#3b82f6] hover:bg-blue-700 text-white py-5 rounded-xl text-xl font-bold shadow-lg transition transform hover:scale-105"
          >
            Log in
          </button>
        </form>

        {/* Sign up link - smaller, always blue, visible */}
        <p className="text-center text-lg text-gray-600 mt-6">
          Dont have an account?{' '}
          <span 
            className="font-bold text-blue-600 underline cursor-pointer hover:text-blue-800 transition"
            onClick={onSignUp}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}