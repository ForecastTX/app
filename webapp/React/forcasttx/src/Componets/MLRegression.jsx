import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MLRegression = () => {
  // Fake data for the regression model
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Fake months as x-axis labels
    datasets: [
      {
        label: 'ML Regression Model',  // Label for the line
        data: [12, 19, 3, 5, 2, 3, 8], // Fake data points for the regression line
        borderColor: 'rgba(75,192,192,1)',  // Line color
        backgroundColor: 'rgba(75,192,192,0.2)',  // Fill color
        fill: true,  // To fill the area under the line
      },
    ],
  };

  // Chart.js options for customization
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'ML Linear Regression Model', // Title for the chart
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`; // Display the value on hover
          },
        },
      },
    },
  };

  return (
    <div className="MLRegression-box">
      <h3>ML Linear Regression</h3>
      <Line data={data} options={options} /> {/* Render the chart here */}
    </div>
  );
};

export default MLRegression;
