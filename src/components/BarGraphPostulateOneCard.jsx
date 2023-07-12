import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
export function BarGraphPostulateOneCard({ title, numberOfZeros, numberOfOnes, zerosPercentage, onesPercentage }) {
    var data = {
        labels: [`Zeros ${zerosPercentage}%`, `Ones ${onesPercentage}%`],
        datasets: [
            {
                label: 'Number of Zeros',
                data: [numberOfZeros, 0],
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: 'rgba(37, 99, 235, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(37, 99, 235, 0.4)',
                hoverBorderColor: 'rgba(37, 99, 235, 1)',
            },
            {
                label: 'Number of Ones',
                data: [0, numberOfOnes],
                backgroundColor: 'rgba(255, 80, 80, 0.2)',
                borderColor: 'rgba(255, 80, 80, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 80, 80, 0.4)',
                hoverBorderColor: 'rgba(255, 80, 80, 1)',
            },
        ],
    };

    // Reducir separacion entre barras
    var options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return (
        <div className='w-full overflow-x-auto bg-white border-none rounded-lg shadow dark:bg-zinc-900'>
            <div className='w-full min-w-full block p-5 text-xs uppercase text-left text-gray-700 bg-gray-50 dark:bg-zinc-900 dark:text-gray-400'>
                {title}
            </div>
            <div className='block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-700'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}