import { useState, useEffect } from 'react';
import OverdueNotifications from './OverdueNotifications';
import DashboardLayout from '../layout/DashboardLayout';

const MyBooks = () => {
  const studentId = 1; // Mock current user

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const mockBorrowRecords = [
    {
      id: 1,
      studentId: 1,
      bookId: 1,
      title: 'Introduction to Computer Science',
      author: 'John Doe',
      dueDate: '2024-12-01',
      returned: false,
    },
    {
      id: 2,
      studentId: 1,
      bookId: 2,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      dueDate: '2023-10-15',
      returned: false,
    },
    {
      id: 3,
      title: 'Introduction to Programming',
      author: 'Bruce Mills',
      category: 'Computer Science',
      isbn: '9780131103627',
      cover: 'https://covers.openlibrary.org/b/id/8231996-L.jpg',
      available: true,
    },
    {
      id: 4,
      title: 'Artificial Intelligence',
      author: 'Melanie Mitchell',
      category: 'Artificial Intelligence',
      isbn: '9780262043791',
      cover: 'https://covers.openlibrary.org/b/id/10521238-L.jpg',
      available: false,
    },
    {
      id: 5,
      title: 'Introduction To Cloud Computing',
      author: 'Eric Flick',
      category: 'Cloud Computing',
      isbn: '9781119756837',
      cover: 'https://covers.openlibrary.org/b/id/10513088-L.jpg',
      available: true,
    },
  ];

  const myRecords = mockBorrowRecords.filter(
    (r) => r.studentId === studentId && !r.returned
  );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
          Loading your books...
        </div> {/* ✅ CLOSED PROPERLY */}

        <div className="my-books-container">
          <h2 className="my-books-title">My Borrowed Books</h2>

          <OverdueNotifications studentId={studentId} />

          {myRecords.length === 0 ? (
            <p>You have no borrowed books.</p>
          ) : (
            <div className="table-wrapper">
              <table className="books-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Due Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {myRecords.map(record => {
                    const isOverdue = new Date(record.dueDate) < new Date();
                    return (
                      <tr key={record.id} className={isOverdue ? 'row-overdue' : ''}>
                        <td>{record?.title || 'Unknown Title'}</td>
                        <td>{record?.author || 'Unknown Author'}</td>
                        <td className={isOverdue ? 'text-overdue' : ''}>
                          {record.dueDate} {isOverdue && '(Overdue)'}
                        </td>
                        <td>
                          <span
                            className={`status-badge ${
                              isOverdue ? 'status-overdue' : 'status-active'
                            }`}
                          >
                            {isOverdue ? 'Overdue' : 'Active'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          My Borrowed Books
        </h2>

        <OverdueNotifications studentId={studentId} />

        {myRecords.length === 0 ? (
          <p className="text-gray-600 mt-4">You have no borrowed books.</p>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {myRecords.map((record) => {
                  const isOverdue = new Date(record.dueDate) < new Date();
                  return (
                    <tr key={record.id} className={isOverdue ? 'bg-red-50' : ''}>
                      <td>{record?.title || 'Unknown Title'}</td>
                      <td>{record?.author || 'Unknown Author'}</td>
                      <td>
                        {record.dueDate} {isOverdue && '(Overdue)'}
                      </td>
                      <td>
                        {isOverdue ? 'Overdue' : 'Active'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyBooks;
