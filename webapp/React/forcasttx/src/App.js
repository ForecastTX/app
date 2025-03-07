import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./styles/login.css";
import "./styles/landing.css";
import "./styles/auth.css";

function Login() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/State_Farm_logo.svg/512px-State_Farm_logo.svg.png" alt="State Farm Logo" />
            <div className="subtitle">ForecastTX</div>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
                <button type="button" id="createAccountBtn" onClick={() => navigate("/create-account")}>
                    Create account
                </button>
            </form>
        </div>
    );
}

function Landing() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => navigate("/login"), 3000);
    }, [navigate]);
    return (
        <div className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/State_Farm_logo.svg/512px-State_Farm_logo.svg.png" alt="State Farm Logo" />
            <div className="welcome-text" id="welcomeText" style={{ opacity: 1 }}>
                Like a Good Neighbor, State Farm is There.
            </div>
        </div>
    );
}

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
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
            <button onClick={checkEmail}>Continue</button>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
            </Routes>
        </Router>
    );
}

export default App;
