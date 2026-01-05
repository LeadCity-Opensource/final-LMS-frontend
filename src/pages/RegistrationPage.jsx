import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { mockUserCredentialsData } from "../mockdata";


const KEY = "users";
const initialUsers = () => {
  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : mockUserCredentialsData;
};

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUser, setNewUser] = useState(initialUsers);
  const [isUserCreated, setIsUserCreated] = useState(false);

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleAddUserCredentials = () => {
    const updated = [...newUser, { email: newEmail, password: newPassword }];
    setNewUser(updated);
    setIsUserCreated(true);
    localStorage.setItem(KEY, JSON.stringify(updated));
  };

  useEffect(() => {
    if (isUserCreated) {
      navigate("/login-page");
    }
  }, [isUserCreated, navigate]);

  return (
    <>
      <form>
        <h1>Account Creation Page</h1>
        <div>
          <label>Email: </label>
          <input
            type="text"
            placeholder="Email"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleAddUserCredentials}>
          Register
        </button>
      </form>
    </>
  );
};

export default RegistrationPage;
