import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

interface UserCredentials {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const userCredentials: UserCredentials[] = JSON.parse(
    localStorage.getItem("users") ?? "[]"
  );
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleLoginCredentials = () => {
    // Handle login credentials logic here
    for (const login of userCredentials) {
      console.log(login.email, login.password);
      if (login.email === newEmail && login.password === newPassword) {
        // Login successful
        setIsLoggedIn(true);
        setShowError(false);
        return;
      }
    }
    setShowError(true);
    setNewEmail("");
    setNewPassword("");
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home-page");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div>
        {showError && (
          <p style={{ color: "red" }}>Invalid email or password.</p>
        )}
        {isLoggedIn && <HomePage />}
      </div>
      <form>
        <h1>Login Page</h1>
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
        <button type="button" onClick={handleLoginCredentials}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPage;
