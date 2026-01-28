import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MessageCard = () => {
  const { borrowId } = useParams();
  const [borrow, setBorrow] = useState(null);
  useEffect(() => {
    const borrowers = JSON.parse(localStorage.getItem("borrowers")) || [];
    const found = borrowers.find(b => String(b.borrowId) === borrowId);
    setBorrow(found || null);
  }, [borrowId]);

  if (!borrow) return <p className="text-center mt-20 text-red-500">Borrow not found!</p>;

  const { user, book, dueDate, type } = borrow;
  const [message, setMessage] = useState("");
  const MAX_CHARS = 200;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white p-5 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-2">{user.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{user.email} • {user.role}</p>
        <p className="font-medium mb-2">Book: {book.title}</p>
        <p className="text-sm text-orange-500 mb-4">Due: {new Date(dueDate).toLocaleString()}</p>
        <textarea
          placeholder="Type message..."
          value={message}
          maxLength={MAX_CHARS}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2 resize-none"
        />
        <div className="text-right text-xs mb-4">{message.length}/{MAX_CHARS}</div>
        <button
          onClick={() => alert(`Message sent to ${user.name}!`)}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
