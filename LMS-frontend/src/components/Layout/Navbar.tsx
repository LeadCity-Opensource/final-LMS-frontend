import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">LMS MVP</div>
            <ul className="navbar-links">
                <li><Link to="/student/my-books">My Books</Link></li>
                <li><Link to="/student/search">Search</Link></li>
                <li><Link to="/staff/dashboard">Staff Dashboard</Link></li>
                <li><Link to="/staff/issue-return">Issue/Return</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
