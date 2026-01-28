import React, { useState } from 'react';
import "./IssueReturn.css"


const IssueReturn = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    matricNumber: "",
    phoneNumber: "",
    email: "",
    course: "",
    level: "",
    bookTitle: "",
    bookIsbn: "",
    issueDate: "",
    returnDate: "",
  });
  
  const [successMessage, setSuccessMessage] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  

  const handleSubmit = () => {
    const { fullName, matricNumber, phoneNumber, email, course, level, bookTitle, bookIsbn, issueDate, returnDate } = formData;
  
    // Check all required fields
    if (!fullName || !matricNumber || !phoneNumber || !email || !course || !level || !bookTitle || !bookIsbn || !issueDate || !returnDate) {
      alert("Please fill in all required fields");
      return;
    }
  
    // Email validation
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    // Success
    setSuccessMessage(`Success: Book "${bookTitle}" issued to ${fullName}!`);
    console.log("Form submitted:", formData);
  
    // Reset only the book-related fields
    setFormData({
      ...formData,
      bookTitle: "",
      bookIsbn: "",
      issueDate: "",
      returnDate: "",
    });
  };
  
  
  

  return (
    
    <div className='mainform' style={{  border: '1px solid #ccc',  borderRadius: "20px", boxShadow: "inset 2px 2px 5px #888"}}>
      
       <div className='w-20 mx-auto'>
       <img
      src="/logo.png"
      alt="School Logo"
      className="mb-6 w-40 h-40 object-contain"
    />
       </div>

       <h2 className="text-center text-2xl font-bold border-b-2 border-gray-300 pb-2">
  ISSUE BOOK
</h2>

     <br />
     
     <div className='info-cont w-full max-w-4xl mx-auto'>
     <p className=''>STUDENT INFORMATION</p>
     {/* STUDENT INFORMATION */}
<div className="grid grid-cols-2 gap-10">
  {/* Row 1: Full Name + Matric Number */}
  <input
    required
    className="px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 bg-gray-200"
    placeholder="Full Name"
    value={formData.fullName}
    onChange={(e) => { setFormData({...formData, fullName: e.target.value}); setSuccessMessage(""); }}
  />
  <input
    required
    className="px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 bg-gray-200"
    placeholder="Matric Number"
    value={formData.matricNumber}
    onChange={(e) => { setFormData({...formData, matricNumber: e.target.value}); setSuccessMessage(""); }}
  />

  {/* Row 2: Phone Number + Email */}
  <input
    required
    className="px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 bg-gray-200"
    placeholder="Phone Number"
    value={formData.phoneNumber}
    onChange={(e) => { setFormData({...formData, phoneNumber: e.target.value}); setSuccessMessage(""); }}
  />
  <input
    required
    className="px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 bg-gray-200"
    placeholder="Email Address"
    value={formData.email}
    onChange={(e) => { setFormData({...formData, email: e.target.value}); setSuccessMessage(""); }}
  />

  {/* Row 3: Course + Level */}
  <input
    required
    className="px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 bg-gray-200"
    placeholder="Course"
    value={formData.course}
    onChange={(e) => { setFormData({...formData, course: e.target.value}); setSuccessMessage(""); }}
  />
  <input
    required
    className="px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 bg-gray-200"
    placeholder="Level"
    value={formData.level}
    onChange={(e) => { setFormData({...formData, level: e.target.value}); setSuccessMessage(""); }}
  />
</div>




<p className='subtitle mt-6'>BOOK INFORMATION</p>
<div className="flex flex-wrap gap-4">
  <input
    required
    className="flex-1 min-w-[200px] px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 bg-gray-200"
    placeholder="Book Title"
    value={formData.bookTitle}
    onChange={(e) => { setFormData({...formData, bookTitle: e.target.value}); setSuccessMessage(""); }}
  />
  <input
    required
    className="flex-1 min-w-[200px] px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 bg-gray-200"
    placeholder="Book ID / ISBN"
    value={formData.bookIsbn}
    onChange={(e) => { setFormData({...formData, bookIsbn: e.target.value}); setSuccessMessage(""); }}
  />
</div>




<p className='subtitle mt-6'>ISSUE & RETURN DATE</p>
<div className="flex flex-wrap gap-4">
  {/* Issue Date */}
  <div className="flex-1 min-w-[200px] flex flex-col">
    <label className="mb-1 text-sm text-gray-600">Issue Date</label>
    <input
      required
      type="date"
      className="px-5 py-3 rounded-xl border bg-gray-200 text-black"
      value={formData.issueDate}
      onChange={(e) => {
        setFormData({ ...formData, issueDate: e.target.value });
        setSuccessMessage("");
      }}
    />
  </div>

  {/* Return Date */}
  <div className="flex-1 min-w-[200px] flex flex-col">
    <label className="mb-1 text-sm text-gray-600">Return Date</label>
    <input
      required
      type="date"
      className="px-5 py-3 rounded-xl border bg-gray-200 text-black"
      value={formData.returnDate}
      onChange={(e) => {
        setFormData({ ...formData, returnDate: e.target.value });
        setSuccessMessage("");
      }}
    />
  </div>
</div>


<div className="flex flex-col items-center gap-5 mt-6">
<button
  className="w-72 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 rounded-full transition-colors duration-300"
  onClick={handleSubmit}
>
  Issue Book
</button>


  {successMessage && (
    <p className="text-green-600 font-bold text-center mt-2">
      {successMessage}
    </p>
  )}
</div>
<br />

     </div>
     
    </div>
  );
};

export default IssueReturn;
