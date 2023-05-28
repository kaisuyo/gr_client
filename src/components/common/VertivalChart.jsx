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

const VerticalChart = ({ data }) => {
  
  const dataSample = {
    title: "General",
    groups: [
      {
        label: 'January',
        key: 0,
        dataset: {
          set0:  Math.random() * 1000,
          set1:  Math.random() * 1000
        }
      },
      {
        label: 'February',
        key: 1,
        dataset: {
          set0:  Math.random() * 1000,
          set1:  Math.random() * 1000
        }
      },
      {
        label: 'March',
        key: 2,
        dataset: {
          set0:  Math.random() * 1000,
          set1:  Math.random() * 1000
        }
      },
      {
        label: 'April',
        key: 3,
        dataset: {
          set0:  Math.random() * 1000,
          set1:  Math.random() * 1000
        }
      },
      {
        label: 'May',
        key: 4,
        dataset: {
          set0:  Math.random() * 1000,
          set1:  Math.random() * 1000
        }
      }
    ],
  }

  const options = {
    responsive: true,
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
    layout: {
      padding: 16
    }
  };

  const dataSetting = {
    labels: data.groups.map(group => group.label),
    datasets: data.groups.length ? Object.keys(data.groups[0].dataset).map((field, index) => ({
      label: field,
      data: data.groups.map(group => group.dataset[field]),
      backgroundColor: Colors[index].color
    })) : []
  };

  return (
    <Bar options={options} data={dataSetting} />
  )
}

export default VerticalChart