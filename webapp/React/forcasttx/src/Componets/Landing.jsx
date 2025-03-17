import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import "../styles/landing.css";

function Landing() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("/login"), 3000);
    }, [navigate]);

    return (
        <div className="landing-container">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/State_Farm_logo.svg/512px-State_Farm_logo.svg.png" 
                alt="State Farm Logo"
                className="landing-logo"
            />
            <div className="landing-welcome-text">
                Like a Good Neighbor, State Farm is There.
            </div>
        </div>
    );
}

export default Landing;
