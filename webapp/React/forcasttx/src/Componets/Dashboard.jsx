import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css";
import TexasMap from './TexasMap';
import Overview from './Overview';
import MLRegression from './MLRegression';
import PastVsAi from './PastVsAi';
import KPI from './KPI';
import TopRegions from './TopRegions';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview'); // State to track active tab
  const navigate = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState(''); // Track selected season

  const handleSeasonChange = (season) => {
    setSelectedSeason(season);
  };

  const regionsData = [
    { name: 'Dallas', hailEvents: 45, totalDamage: '$3.2 Million' },
    { name: 'Houston', hailEvents: 30, totalDamage: '$2.5 Million' },
    { name: 'Austin', hailEvents: 25, totalDamage: '$1.8 Million' },
    { name: 'San Antonio', hailEvents: 20, totalDamage: '$1.2 Million' },
  ];

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
        {/* Overview Section */}
        <div className={`overview-content ${activeTab === 'overview' ? 'active' : ''}`}>
          <h2>Overview</h2>
          <p>This is the overview section of the dashboard.</p>

          <div className="overview-layout">
  {/* Left Side - Charts */}
  <div className="left-side">
    <div className="Season-box">
      <h3>Select Season</h3>
      {/* Button or Dropdown for selecting season */}
      <div>
        <button onClick={() => handleSeasonChange('Winter')}>Winter</button>
        <button onClick={() => handleSeasonChange('Spring')}>Spring</button>
        <button onClick={() => handleSeasonChange('Summer')}>Summer</button>
        <button onClick={() => handleSeasonChange('Fall')}>Fall</button>
      </div>
      <p>Selected Season: {selectedSeason}</p>
    </div>

    <div className="charts">
      <div className="MLRegression-box">
        {/* Here, integrate ML chart or placeholder */}
        <MLRegression/>
      </div>
      <div className="PastVsAi-box">

        <PastVsAi/>
        {/* Here, integrate comparison chart or placeholder */}
      </div>
    </div>
  </div>

  {/* Right Side - Texas Map */}
  <div className="right-side">
    <h3>Map of Texas</h3>
    <TexasMap />
  </div>
</div>
        </div>

        {/* Detailed Section */}
        <div className={`detailed-content ${activeTab === 'detailed' ? 'active' : ''}`}>
        <div className='KPI-Section'>
        {/* KPI for top city in texas */}
        <KPI
        title="Top City for Hail in Texas"
        value="Dallas"
        change="+15%"
        trend="up"
      />
      
      </div>
     <TopRegions 
        title="Top Affected Regions" 
        regionsData={regionsData} 
      />
        </div>
      </div>

      {/* Logout button */}
      <button className='Logout-btn' onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default Dashboard;
