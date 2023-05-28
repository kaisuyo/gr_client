import React from 'react';

import Colors from './Colors';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const dataSample = {
    title: "Labeling",
    groups: [
      {
        label: "Labeled",
        key: 0,
        data: 22,
      },
      {
        label: "Unlabel",
        key: 0,
        data: 150,
      }

    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: data.title,
        position: "top"
      },
    },
    layout: {
      padding: 16
    }
  };
  const dataSetting = {
    labels: data.groups.map(group => group.label),
    datasets: [
      {
        label: '# of Votes',
        data: data.groups.map(group => group.data),
        backgroundColor: Colors.slice(0, data.groups.length).map(color => color.alphaColor),
        borderColor: Colors.slice(0, data.groups.length).map(color => color.color),
        borderWidth: 1,
      }
    ]
  }

  return <Pie options={options} data={dataSetting} />
}

export default PieChart