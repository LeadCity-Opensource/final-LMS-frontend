import React from 'react';
import DashboardLayout from '../layout/DashboardLayout';

const OverdueList = () => {
  const allBorrowers = JSON.parse(localStorage.getItem("borrowers")) || [];

const overdueData = allBorrowers
  .filter(b => new Date() > new Date(b.dueDate)) // books past due
  .map(b => ({
    id: b.borrowId,
    title: b.book.title,
    student: b.user.name,
    daysLate: Math.ceil((new Date() - new Date(b.dueDate)) / (1000 * 60 * 60 * 24)),
  }));


  return (
    <DashboardLayout>
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Staff: Overdue Books List</h2>
      <ul>
        {overdueData.map((book) => (
          <li key={book.id}>
            {book.title} - <strong>{book.student}</strong> 
            <span style={{ color: 'red' }}> ({book.daysLate} days late)</span>
          </li>
        ))}
      </ul>
    </div>
    </DashboardLayout>
  );
};

export default OverdueList;
