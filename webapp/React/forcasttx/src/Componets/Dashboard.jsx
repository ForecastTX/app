import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview'); // State to track active tab
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      {/* Tabs */}
      <div className="dashboard-tabs">
        <button 
          className={activeTab === 'overview' ? 'active' : ''} 
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'detailed' ? 'active' : ''} 
          onClick={() => setActiveTab('detailed')}
        >
          Detailed
        </button>
      </div>

      {/* Tab content */}
      <div className="dashboard-tab-content">
        <div className={`overview-content ${activeTab === 'overview' ? 'active' : ''}`}>
          <h2>Overview</h2>
          <p>This is the overview section of the dashboard.</p>
        </div>
        <div className={`detailed-content ${activeTab === 'detailed' ? 'active' : ''}`}>
          <h2>Detailed Information</h2>
          <p>This is the detailed section of the dashboard.</p>
        </div>
      </div>

      {/* Logout button */}
      <button className='Logout-btn' onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default Dashboard;
