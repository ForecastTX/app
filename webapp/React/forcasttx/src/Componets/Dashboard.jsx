import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview'); // State to track active tab

  return (
    <div className="container">
      <h1>Dashboard</h1>

      {/* Tabs */}
      <div className="tabs">
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
      <div className="tab-content">
        <div className={`overview-content ${activeTab === 'overview' ? 'active' : ''}`}>
          <h2>Overview</h2>
          <p>This is the overview section of the dashboard.</p>
        </div>
        <div className={`detailed-content ${activeTab === 'detailed' ? 'active' : ''}`}>
          <h2>Detailed Information</h2>
          <p>This is the detailed section of the dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
