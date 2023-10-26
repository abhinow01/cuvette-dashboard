import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import { Chart,LinearScale,CategoryScale } from "chart.js/auto";
import 'chartjs-adapter-date-fns';

function ComparisonGraph() {
  const [data, setData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    // Initialize chart when component mounts
    const ctx = document.getElementById('comparisonChart').getContext('2d');

    if (chartInstance) {
      chartInstance.destroy(); // Destroy existing chart if it exists
    }

    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Percentile',
          data: data,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });

    setChartInstance(newChartInstance);

    // Cleanup on component unmount
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [data, chartInstance]);

  const updateData = (newData) => {
    setData(newData);
    if (chartInstance) {
        chartInstance.data.datasets[0].data = newData;
        chartInstance.update();
      }
  };

  return (
    <div>
      <h2>Comparison Graph</h2>
      <canvas id="comparisonChart" width="400" height="200"></canvas>
      {/* <CustomModal isOpen={true} updateData={updateData} />  */}
    </div>
  );
}

export default ComparisonGraph;
