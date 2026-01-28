import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminCreateUser } from "../services/api";

const AdminCreateUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    idNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "staff", // default role
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    const { firstName, lastName, designation, idNumber, email, password, confirmPassword, role } = formData;
  
    // ✅ Validation
    if (!firstName || !lastName || !designation || !idNumber || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
  
    // ✅ Payload
    const payload = { firstName, lastName, designation, idNumber, email, password, role };

    try {
      await adminCreateUser(payload);
      alert("User created successfully!");
      navigate("/login"); // ✅ Navigate to login page
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create user. Please try again.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-md flex flex-col items-center px-6">
        <img src="/logo.png" alt="Logo" className="mb-6 w-40 h-40 object-contain" />

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="w-full mb-4 flex gap-4">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full px-5 py-3 rounded-lg border focus:ring-2 focus:ring-sky-400" />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full px-5 py-3 rounded-lg border focus:ring-2 focus:ring-sky-400" />
        </div>

        <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} className="w-full px-5 py-3 rounded-lg border mb-4 focus:ring-2 focus:ring-sky-400" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3 rounded-lg border mb-4 focus:ring-2 focus:ring-sky-400" />
        <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} className="w-full px-5 py-3 rounded-lg border mb-4 focus:ring-2 focus:ring-sky-400" />
        <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} className="w-full px-5 py-3 rounded-lg border mb-4 focus:ring-2 focus:ring-sky-400" />

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-5 py-3 rounded-lg border mb-4 focus:ring-2 focus:ring-sky-400" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full px-5 py-3 rounded-lg border mb-6 focus:ring-2 focus:ring-sky-400" />

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full mb-4">Create User</button>
      </form>
    </div>
  );
};

export default AdminCreateUser;
