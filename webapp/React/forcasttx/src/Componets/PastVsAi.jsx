import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, Filler);

const PastVsAi = () => {
  // Fake data for the Past vs AI comparison
  const data = {
    labels: ['April', 'May ', 'June', 'July ', 'Auguest'], // Categories for comparison
    datasets: [
      {
        label: 'Past Data',  // Past data label
        data: [35, 70, 50, 90, 65],  // Fake past data points
        fill: true, // Fill the area under the line
        backgroundColor: 'rgba(255,99,132,0.2)', // Past data area color
        borderColor: 'rgba(255,99,132,1)', // Past data line color
        borderWidth: 2, // Line width
        tension: 0.4, // Smooth curve for the line
      },
      {
        label: 'AI Predictions',  // AI predictions label
        data: [40, 60, 55, 80, 70],  // Fake AI predictions
        fill: true, // Fill the area under the line
        backgroundColor: 'rgba(54,162,235,0.2)', // AI prediction area color
        borderColor: 'rgba(54,162,235,1)', // AI prediction line color
        borderWidth: 2, // Line width
        tension: 0.4, // Smooth curve for the line
      },
    ],
  };

  // Chart.js options for customization
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Past Data vs AI Predictions', // Chart title
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date', // X-axis label
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values', // Y-axis label
        },
        beginAtZero: true, // Ensures the y-axis starts at 0
      },
    },
  };

  return (
    <div className="PastVsAi-box">
      <h3>Past Data vs AI</h3>
      <Line data={data} options={options} /> {/* Render the line chart here */}
    </div>
  );
};

export default PastVsAi;
