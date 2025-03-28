import React from 'react';

const KPI = ({ title, value, change, trend }) => {
  const trendColor = trend === 'up' ? 'green' : trend === 'down' ? 'red' : 'gray';
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '250px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</h3>
      <p
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          margin: '10px 0',
        }}
      >
        {value}
      </p>
      <div
        style={{
          color: trendColor,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {trend === 'up' ? (
          <span style={{ fontSize: '1.2rem' }}>▲</span>
        ) : trend === 'down' ? (
          <span style={{ fontSize: '1.2rem' }}>▼</span>
        ) : (
          <span style={{ fontSize: '1.2rem' }}>→</span>
        )}
        <span>{change}%</span>
      </div>
    </div>
  );
};

export default KPI;
