import React, { useRef, useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const ScentIntelChart = ({ scentIntel, type }) => {
    const chartRef = useRef(null);
    const [gradientFill, setGradientFill] = useState('rgba(75, 238, 61, 0.2)');

    useEffect(() => {
        const chart = chartRef.current;

        if (chart && chart.ctx) {
            const ctx = chart.ctx;
            const width = chart.width;
            const height = chart.height;
            const centerX = width / 2;
            const centerY = height / 2;
            const radius = Math.min(width, height) / 2;

            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);

            if (type === 'even') {
                gradient.addColorStop(0, 'rgba(255, 187, 220, 0.4)');
                gradient.addColorStop(0.5, 'rgba(232, 165, 156, 0.4)');
                gradient.addColorStop(1, 'rgba(192, 109, 83, 0.4)');
            } else {
                gradient.addColorStop(0, 'rgba(255, 32, 32, 0.4)');
                gradient.addColorStop(0.5, 'rgba(249, 212, 20, 0.4)');
                gradient.addColorStop(1, 'rgba(75, 238, 61, 0.4)');
            }

            setGradientFill(gradient);
        }
    }, [type]);

    const isEven = type === 'even';

    const labels = isEven
        ? ['Ambrette', 'Berries', 'Rose', 'Coffee', 'Nectar']
        : ['Neroli', 'Lime', 'Honey', 'Grapefruit', 'Orange'];

    const dataPoints = isEven
        ? [
            scentIntel.ambrette || 0,
            scentIntel.berries || 0,
            scentIntel.rose || 0,
            scentIntel.coffee || 0,
            scentIntel.nectar || 0
        ]
        : [
            scentIntel.neroli || 0,
            scentIntel.lime || 0,
            scentIntel.honey || 0,
            scentIntel.grapefruit || 0,
            scentIntel.orange || 0
        ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Scent Profile',
                data: dataPoints,
                backgroundColor: gradientFill,
                borderColor: '#a34d2e',
                borderWidth: 2,
                pointBackgroundColor: '#731718',
                pointBorderColor: '#731718',
                pointRadius: 4,
            }
        ]
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: '#731718'
                },
                grid: {
                    color: '#731718'
                },
                suggestedMin: 0,
                suggestedMax: 5,
                ticks: {
                    stepSize: 1,
                    backdropColor: 'transparent',
                    color: '#731718'
                },
                pointLabels: {
                    color: '#731718',
                    font: {
                        size: 14
                    }
                }
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    return (
        <div className="scent-chart-container">
            <Radar ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default ScentIntelChart;
