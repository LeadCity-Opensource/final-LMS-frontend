import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import StudentSignup from "./pages/StudentSignup";
import StaffSignup from "./pages/StaffSignup";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/signup/staff" element={<StaffSignup />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </div>
  );
}

export default App;