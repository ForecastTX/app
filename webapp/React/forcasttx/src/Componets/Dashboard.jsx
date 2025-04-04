import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css";
import TexasMap from './TexasMap';
import MLRegression from './MLRegression';
import PastVsAi from './PastVsAi';
import KPI from './KPI';
import TopRegions from './TopRegions';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState("Winter");

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const regionsData = [
    { name: 'Dallas', hailEvents: 45, totalDamage: '$3.2 Million' },
    { name: 'Houston', hailEvents: 30, totalDamage: '$2.5 Million' },
    { name: 'Austin', hailEvents: 25, totalDamage: '$1.8 Million' },
    { name: 'San Antonio', hailEvents: 20, totalDamage: '$1.2 Million' },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Forecast Tx</h1>

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

      {/* Tab Content */}
      <div className="dashboard-tab-content">
        {activeTab === 'overview' && (
          <div className="overview-content">
            <div className="overview-headder"> 
            <h2>Overview</h2>
            <p>This is the overview section of the dashboard.</p>
          </div>
            <div className="overview-layout">
              {/* Left Side - Controls and Charts */}
              <div className="left-side">
              <div className="season-box">
                <h3>Select Season</h3>
                <select value={selectedSeason} onChange={handleSeasonChange} className="season-dropdown">
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Fall">Fall</option>
                </select>
                <p>Selected Season: {selectedSeason}</p>
              </div>
                <div className="charts">
                  <div className="MLRegression-box">
                    <MLRegression/>
                  </div>
                  <div className="PastVsAi-box">
                    <PastVsAi/>
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
        )}

        {/* Detailed Section */}
        {activeTab === 'detailed' && (
          <div className="detailed-content">
            <div className="detailed-headder"> 
              <h2>Detailed</h2>
              <p>This is the detailed section of the dashboard.</p>
            </div>
            <div className="detailed-layout">
              <div className="KPI-Container">
                <KPI title="Top City for Hail in Texas" value="Dallas" change="+15%" trend="up" />
                <KPI title="Highest Damage Cost" value="$5.1 Million" change="+20%" trend="up" />
                <KPI title="Most Frequent Hail Events" value="Houston" change="+10%" trend="up" />
              </div>
              <div className="TopRegions-Container">
                <TopRegions title="Top Affected Regions" regionsData={regionsData} />
                <TopRegions title="Secondary Affected Regions" regionsData={regionsData} />
                <TopRegions title="Another Top Regions" regionsData={regionsData} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Logout button */}
      <button className='Logout-btn' onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default Dashboard;
