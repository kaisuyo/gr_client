import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Colors from './Colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalStacked({ data }) {

  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: data.title,
        position: "bottom"
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    layout: {
      padding: 16
    }
  };

  const dataSetting = {
    labels: data.groups.map(group => group.label),
    datasets: Object.keys(data.groups[0].dataset).map((field, index) => ({
      label: field,
      data: data.groups.map(group => group.dataset[field]),
      backgroundColor: Colors[index].color
    }))
  };

  return <Bar options={options} data={dataSetting} />;
}
