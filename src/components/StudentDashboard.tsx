import React, { useState } from 'react';

const imgSchoolLogo = new URL('../assets/lcu-logo-2.png', import.meta.url).href;

interface StudentDashboardProps {
  onSignUpComplete?: () => void;
  onBackToLogin?: () => void;
}

export default function StudentDashboard({onSignUpComplete, onBackToLogin }: StudentDashboardProps) {
  const [fullName, setFullName] = useState('');
  const [matric, setMatric] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e?: React.FormEvent) => {  // e is now optional
  if (e) e.preventDefault();  // Only prevent if it's from form (optional safety)
  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }
  console.log('Sign Up Data:', { fullName, matric, course, email, password });

  // Go back to login page
  if (onBackToLogin) {
    onBackToLogin();  // This will take you back to the login screen
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

      {/* Main Sign-up Form - Centered & Compact */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl p-10">
        {/* Logo at top */}
        <div className="flex justify-center mb-8">
          <img
            alt="Lead City University Logo"
            src={imgSchoolLogo}
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-black text-center mb-10">
          Student Sign Up
        </h1>

        {/* Form */}
        <form className="space-y-6">
        <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            required
        />

        <input
            type="text"
            value={matric}
            onChange={(e) => setMatric(e.target.value)}
            placeholder="Matric Number"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            required
        />

        <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Course"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            required
        />

        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            required
        />

        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            required
        />

        <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            required
        />

        {/* Sign Up Button - now goes back to login */}
        <button
            type="button"  // ← Changed from submit to button
            onClick={handleSignUp}  // ← Calls handleSignUp on click
            className="w-full bg-[#3b82f6] hover:bg-blue-700 text-white py-5 rounded-xl text-xl font-bold shadow-lg transition transform hover:scale-105"
        >
            Sign Up
        </button>
        </form>

        {/* Already have an account? Sign in */}
        <p className="text-center text-lg text-gray-600 mt-6">
          Already have an account?{' '}
          <span 
            className="font-bold text-blue-600 underline cursor-pointer hover:text-blue-800 transition"
            onClick={onBackToLogin}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}