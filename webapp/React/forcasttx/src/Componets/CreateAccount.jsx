import React, { useState } from 'react'; // Correct import for useState
import { useNavigate } from 'react-router-dom'; // Correct import for useNavigate

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
        <div className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/State_Farm_logo.svg/512px-State_Farm_logo.svg.png" alt="State Farm Logo" />
            <div className="subtitle">ForecastTX</div>
            <h2>Check Authorization</h2>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required 
            />
            <button onClick={checkEmail}>Continue</button>
        </div>
    );
}

export default CreateAccount;
