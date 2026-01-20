
import "./AdminDashboard.css";

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h2>Staff Dashboard</h2>

            <div className="stats">
                <div className="card">Total Books</div>
                <div className="card">Borrowed Books</div>
                <div className="card">Overdue Books</div>
                <div className="card">Registered Students</div>
            </div>

            <div className="actions">
                <button>Issue Book</button>
                <button>Return Book</button>
                <button>Manage Books</button>
                <button>View Overdue</button>
            </div>
        </div>
    );
};

export default AdminDashboard;
