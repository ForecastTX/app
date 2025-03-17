import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import "../styles/auth.css";

function CreateAccount() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const authorizedEmails = ["user@example.com", "admin@forecasttx.com"];
    
    const checkEmail = () => {
        if (authorizedEmails.includes(email)) {
            navigate("/create-account");
        } else {
            alert("Email not authorized.");
        }
    };

    return (
        <div className="auth-container">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/State_Farm_logo.svg/512px-State_Farm_logo.svg.png" 
                alt="State Farm Logo" 
                className="auth-logo" 
            />
            <div className="auth-subtitle">ForecastTX</div>
            <h2 className="auth-title">Check Authorization</h2>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required 
                className="auth-input"
            />
            <button onClick={checkEmail} className="auth-btn">Continue</button>
            <button onClick={() => navigate("/login")} className="back-to-login-btn">Back to Login</button>
        </div>
    );
}

export default CreateAccount;
