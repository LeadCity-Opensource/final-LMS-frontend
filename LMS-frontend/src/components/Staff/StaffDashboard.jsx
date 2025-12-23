import { Link } from 'react-router-dom';

const StaffDashboard = () => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Staff Dashboard</h2>
            <ul className="list-disc pl-5">
                <li><Link to="/staff/issue-return" className="text-blue-600 hover:underline">Issue / Return Books</Link></li>
                <li><Link to="/staff/overdue" className="text-blue-600 hover:underline">Overdue Books</Link></li>
                <li><Link to="/staff/books" className="text-blue-600 hover:underline">Manage Books</Link></li>
            </ul>
        </div>
    );
};

export default StaffDashboard;
