import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import Colors from './Colors';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);


export function BubbleChart({ data }) {
  const dataSample = {
    title: "title",
    xTitle: "x title",
    yTitle: "y title",
    groups: [
      {
        label: "label 1",
        key: 0,
        data: Array.from({ length: 50 }, () => ({
          x: Math.random()*100,
          y: Math.random()*100,
          r: 5,
        })),
      },
      {
        label: "label 2",
        key: 0,
        data: Array.from({ length: 50 }, () => ({
          x: Math.random()*100,
          y: Math.random()*100,
          r: 10,
        })),
      }
    ]
  }

  const dataSetting = {
    datasets: data.groups.map((group, index) => ({
      label: group.label,
      data: group.data,
      backgroundColor: Colors[index].customAlpha(0.6),
    }))
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: data.title,
        position: "top"
      },
    },
    layout: {
      padding: 16
    },
    scales: {
      y: {
        title: {
          display: true,
          text: data.yTitle,
        }
      },
      x: {
        title: {
          display: true,
          text: data.xTitle,
        }
      }
    }   
  };

  return <Bubble style={{width: "100%"}} options={options} data={dataSetting} />;
}
