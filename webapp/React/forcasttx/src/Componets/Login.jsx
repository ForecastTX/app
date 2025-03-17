import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    {/*Simulate a successful login if the email is "user@example.com" */}
    if (email === "user@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/State_Farm_logo.svg/512px-State_Farm_logo.svg.png" 
        alt="State Farm Logo" 
      />
      <div className="login-subtitle">ForecastTX</div>
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-btn">Login</button>
        <button 
          type="button" 
          id="createAccountBtn" 
          onClick={() => navigate("/create-account")}
          className="create-account-btn"
        >
          Create account
        </button>
      </form>
    </div>
  );
}

export default Login;
