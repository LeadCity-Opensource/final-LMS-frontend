import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LogInSplash from '../imports/LogInSplash5';
import WelcomeScreen from '../components/WelcomeScreen';
import LoginPage from '../components/LoginPage';
import RoleSelection from '../components/RoleSelection';
import StudentDashboard from '../components/StudentDashboard';
import StaffDashboard from '../components/StaffDashboard';
import WelcomeDesignPage from '../components/welcomeDesignPage';
import MainDashboard from '../components/MainDashboard';
import BooksPage from '../components/BooksPage'; // Import the new Books page

function AppContent() {
  const [step, setStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  // Auto-transition from welcome (step 5) to main dashboard after 1.5 seconds
  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        navigate('/dashboard'); // Navigate to dashboard instead of setting step 6
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  // Helper to render step-based components (for non-dashboard routes)
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="relative">
            <LogInSplash />
            <button
              onClick={() => setStep(1)}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
            >
              Click Here
            </button>
          </div>
        );
      case 1:
        return <WelcomeScreen onGetStarted={() => setStep(2)} />;
      case 2:
        return (
          <LoginPage
            onLogin={() => setStep(5)}
            onSignUp={() => setStep(3)}
            onBackToLogin={() => setStep(2)}
          />
        );
      case 3:
        return (
          <RoleSelection
            onSelectRole={(role) => {
              setSelectedRole(role);
              setStep(4);
            }}
          />
        );
      case 4:
        return selectedRole === 'student' ? (
          <StudentDashboard onBackToLogin={() => setStep(2)} />
        ) : (
          <StaffDashboard onBackToLogin={() => setStep(2)} />
        );
      case 5:
        return <WelcomeDesignPage />;
      default:
        return null;
    }
  };

  return (
    <Routes>
      {/* Step-based routes (for the initial flow) */}
      <Route path="/" element={renderStep()} />
      <Route path="/welcome" element={<WelcomeScreen onGetStarted={() => setStep(2)} />} />
      <Route path="/login" element={<LoginPage onLogin={() => setStep(5)} onSignUp={() => setStep(3)} onBackToLogin={() => setStep(2)} />} />
      <Route path="/role-selection" element={<RoleSelection onSelectRole={(role) => { setSelectedRole(role); setStep(4); }} />} />
      <Route path="/student-signup" element={<StudentDashboard onBackToLogin={() => setStep(2)} />} />
      <Route path="/staff-signup" element={<StaffDashboard onBackToLogin={() => setStep(2)} />} />
      <Route path="/post-login" element={<WelcomeDesignPage />} />

      {/* Main Dashboard and sub-pages */}
      <Route path="/dashboard" element={<MainDashboard />} />
      <Route path="/books" element={<BooksPage />} />
      {/* Add more routes here as needed, e.g., /journals */}
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;