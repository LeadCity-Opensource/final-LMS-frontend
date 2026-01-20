import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import SignupModal from "../components/SignupModal";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const userCredentials = JSON.parse(localStorage.getItem("users") ?? "[]");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleLoginCredentials = () => {
    for (const login of userCredentials) {
      if (login.email === newEmail && login.password === newPassword) {
        // Login successful
        setShowError(false);
        navigate("/dashboard");
        return;
      }
    }
    // If credentials don't match
    setShowError(true);
    setNewEmail("");
    setNewPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-sky-300 rounded-t-[50%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center px-6">
        <img
          src="/logo.png"
          alt="School Logo"
          className="mb-6 w-40 h-40 object-contain"
        />

        {showError && (
          <p className="text-red-500 text-sm mb-4">
            Invalid email or password.
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={newEmail}
          onChange={handleEmailChange}
          className="w-full mb-5 px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
        />

        <div className="relative w-full mb-8">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={newPassword}
            onChange={handlePasswordChange}
            className="w-full px-5 py-3 pr-12 rounded-lg border 
               focus:outline-none focus:ring-2 focus:ring-sky-400
                text-white placeholder-gray-400"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-4 flex items-center
               text-gray-400 hover:text-white focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition duration-300 mb-4"
          type="button"
          onClick={handleLoginCredentials}
        >
          Login
        </button>

        <p className="text-sm text-gray-700">
          Don't have an account?{" "}
          <span
            onClick={() => setIsModalOpen(true)}
            className="text-white font-semibold cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Login;
