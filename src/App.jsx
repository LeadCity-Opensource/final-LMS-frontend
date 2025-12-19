import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/login.jsx";

// Temporary pages (create later)
const AdminDashboard = () => <h1>Admin Dashboard</h1>;
const StaffDashboard = () => <h1>Staff Dashboard</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

