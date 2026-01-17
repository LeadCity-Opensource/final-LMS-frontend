import React, { useState } from 'react';

const IssueReturn = () => {
  const [formData, setFormData] = useState({ studentId: '', bookId: '' });

  const handleAction = (action) => {
    if (!formData.bookId) {
      alert("Book ID is required");
      return;
    }

    console.log(`Processing ${action} for:`, formData);
    alert(`Success: Book ${formData.bookId} ${action === 'issue' ? 'issued' : 'returned'}.`);

    setFormData({ studentId: '', bookId: '' });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', maxWidth: '400px' }}>
      <h2>Staff: Issue & Return</h2>

      <div>
        <input
          type="text"
          placeholder="Student ID"
          value={formData.studentId}
          onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
          style={{ padding: "10px", margin: "5px", fontSize: "13px", width: "100%" }}
        />
        <input
          type="text"
          placeholder="Book ID"
          value={formData.bookId}
          onChange={(e) => setFormData({ ...formData, bookId: e.target.value })}
          style={{ padding: "10px", margin: "5px", fontSize: "13px", width: "100%" }}
        />
        <button onClick={() => handleAction('issue')} style={{ margin: "10px 5px" }}>Issue</button>
        <button onClick={() => handleAction('return')} style={{ margin: "10px 5px" }}>Return</button>
      </div>
    </div>
  );
};

export default IssueReturn;
