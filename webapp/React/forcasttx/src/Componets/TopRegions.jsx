import React from 'react';

const TopRegions = ({ title, regionsData }) => {
  return (
    <div className="kpi-card">
      <h3>{title}</h3>
      <ol>
        {regionsData.slice(0, 3).map((region, index) => (
          <li key={index}>
            <strong>{region.name}</strong>: {region.hailEvents} hail events, {region.totalDamage} in damage
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopRegions;
