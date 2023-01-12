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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const VerticalChart = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: data.title,
            },
        },
    };
    
    const dataSetting = {
        labels: data.groups.map(group => group.label),
        datasets: Object.keys(data.groups[0].dataset).map(field => ({
            label: field,
            data: data.groups.map(group => group.dataset[field]?.data),
            backgroundColor: data.groups.map(group => group.dataset[field]?.color)
        }))
    };

    return (
        <Bar options={options} data={dataSetting} />
    )
}

export default VerticalChart