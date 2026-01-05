import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import StudentLogin from './components/Student/StudentLogin';
import BookSearch from './components/Student/BookSearch';
import MyBooks from './components/Student/MyBooks';
import StaffLogin from './components/Staff/StaffLogin';
import StaffDashboard from './components/Staff/StaffDashboard';
import IssueReturn from './components/Staff/IssueReturn';
import OverdueList from './components/Staff/OverdueList';
import BookManagement from './components/Staff/BookManagement';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <div className="app-container" style={{ padding: '20px' }}>
        <Routes>
          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/student/login" replace />} />

          {/* Student Routes */}
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/search" element={<BookSearch />} />
          <Route path="/student/my-books" element={<MyBooks />} />

          {/* Staff Routes */}
          <Route path="/staff/login" element={<StaffLogin />} />
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
          <Route path="/staff/issue-return" element={<IssueReturn />} />
          <Route path="/staff/overdue" element={<OverdueList />} />
          <Route path="/staff/books" element={<BookManagement />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
