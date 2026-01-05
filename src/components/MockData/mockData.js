



export const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', status: 'Borrowed' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780061120084', status: 'Available' },
    { id: 3, title: '1984', author: 'George Orwell', isbn: '9780451524935', status: 'Borrowed' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '9780141439518', status: 'Available' },
    { id: 5, title: 'Catcher in the Rye', author: 'J.D. Salinger', isbn: '9780316769488', status: 'Borrowed' },
];

export const borrowRecords = [
    { id: 101, studentId: 1, bookId: 1, borrowDate: '2025-12-01', dueDate: '2025-12-15', returned: false },
    { id: 102, studentId: 1, bookId: 3, borrowDate: '2025-12-10', dueDate: '2025-12-24', returned: false },
    { id: 103, studentId: 1, bookId: 5, borrowDate: '2025-11-20', dueDate: '2025-12-04', returned: false }, // Overdue
];
