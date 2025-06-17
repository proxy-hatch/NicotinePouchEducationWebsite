"use client";

import Script from 'next/script';
import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        Chart: any;
    }
}

export default function MarketGrowthPage() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);

    const initializeChart = () => {
        if (!window.Chart || !chartRef.current) {
            return;
        }

        const myChartRef = chartRef.current.getContext('2d');
        if (!myChartRef) {
            return;
        }

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'];
        const realisticData = [0.3, 0.8, 1.8, 2.7, 4.7, 7.4, 7.25, 7.1, 9.2, 11.9, 15.3, 19.7, 25.4, 27.8, 30.2];
        const nulls = new Array(7).fill(null);
        const conservativeData = [...nulls, 6.6, 7.9, 9.5, 11.4, 13.7, 16.4, 19.1, 22.0];
        const optimisticData = [...nulls, 7.5, 10.2, 13.8, 18.7, 25.4, 34.5, 39.8, 43.5];

        chartInstance.current = new window.Chart(myChartRef, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Optimistic Projection',
                        data: optimisticData,
                        borderColor: 'transparent',
                        pointRadius: 0,
                        fill: '+1',
                        backgroundColor: 'rgba(14, 165, 233, 0.1)', // Light sky blue fill
                    },
                    {
                        label: 'Conservative Projection',
                        data: conservativeData,
                        borderColor: 'transparent',
                        pointRadius: 0,
                    },
                    {
                        label: 'Realistic Estimate',
                        data: realisticData,
                        borderColor: '#0ea5e9', // sky-500
                        borderWidth: 3.5,
                        pointBackgroundColor: '#0ea5e9',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#0ea5e9',
                        pointRadius: (context: any) => (context.dataIndex === 0 || context.dataIndex === years.length - 1) ? 5 : 0,
                        pointHoverRadius: 6,
                        tension: 0.4,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(226, 232, 240, 0.7)', borderDash: [3, 3] },
                        ticks: {
                            callback: function(value: any) { return '$' + value + 'B'; },
                            color: '#64748b', font: { weight: '500' }
                        },
                        title: {
                            display: true, text: 'Market Valuation (in Billions USD)',
                            color: '#475569', font: { size: 14 }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#64748b', font: { weight: '500' } }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: false, // Disable default tooltip
                        external: function(context: any) {
                            let tooltipEl = document.getElementById('chartjs-tooltip');

                            if (!tooltipEl) {
                                tooltipEl = document.createElement('div');
                                tooltipEl.id = 'chartjs-tooltip';
                                tooltipEl.innerHTML = '<table></table>';
                                document.body.appendChild(tooltipEl);
                            }

                            const tooltipModel = context.tooltip;
                            if (tooltipModel.opacity === 0) {
                                tooltipEl.style.opacity = '0';
                                return;
                            }

                            tooltipEl.classList.remove('above', 'below', 'no-transform');
                            if (tooltipModel.yAlign) {
                                tooltipEl.classList.add(tooltipModel.yAlign);
                            } else {
                                tooltipEl.classList.add('no-transform');
                            }

                            if (tooltipModel.body) {
                                const titleLines = tooltipModel.title || [];
                                const dataIndex = tooltipModel.dataPoints[0].dataIndex;
                                const realistic = realisticData[dataIndex];
                                const conservative = conservativeData[dataIndex];
                                const optimistic = optimisticData[dataIndex];

                                let tableRoot = tooltipEl.querySelector('table');
                                if (tableRoot) {
                                    tableRoot.innerHTML = '';

                                    let thead = document.createElement('thead');
                                    titleLines.forEach(function(title: string) {
                                        let tr = document.createElement('tr');
                                        let th = document.createElement('th');
                                        th.style.borderWidth = '0';
                                        th.style.fontWeight = '700';
                                        th.style.paddingBottom = '8px';
                                        th.innerText = title;
                                        tr.appendChild(th);
                                        thead.appendChild(tr);
                                    });
                                    tableRoot.appendChild(thead);

                                    let tbody = document.createElement('tbody');
                                    if (dataIndex < 7) { // Historical data
                                        let tr = document.createElement('tr');
                                        let td = document.createElement('td');
                                        td.style.borderWidth = '0';
                                        td.innerHTML = `<div class="chartjs-tooltip-item"><span>Historical Value:</span> <strong>$${realistic}B</strong></div>`;
                                        tr.appendChild(td);
                                        tbody.appendChild(tr);
                                    } else { // Projection data
                                        const rows = [
                                            { label: 'Optimistic', value: optimistic, color: '#0ea5e9' },
                                            { label: 'Realistic', value: realistic, color: '#0284c7' },
                                            { label: 'Conservative', value: conservative, color: '#0369a1' },
                                        ];
                                        rows.forEach(row => {
                                            let tr = document.createElement('tr');
                                            let td = document.createElement('td');
                                            td.style.borderWidth = '0';
                                            td.innerHTML = `<div class="chartjs-tooltip-item"><span>${row.label}:</span> <strong style="color: ${row.color}">$${row.value}B</strong></div>`;
                                            tr.appendChild(td);
                                            tbody.appendChild(tr);
                                        });
                                    }
                                    tableRoot.appendChild(tbody);
                                }
                            }

                            const position = context.chart.canvas.getBoundingClientRect();
                            tooltipEl.style.opacity = '1';
                            tooltipEl.style.position = 'absolute';
                            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                            tooltipEl.style.font = "14px 'Inter', sans-serif";
                            tooltipEl.style.backgroundColor = '#1e293b';
                            tooltipEl.style.color = '#f1f5f9';
                            tooltipEl.style.borderRadius = '8px';
                            tooltipEl.style.padding = '12px';
                            tooltipEl.style.pointerEvents = 'none';
                            tooltipEl.style.transform = 'translate(-50%, -110%)';
                            tooltipEl.style.transition = 'all .1s ease';
                        }
                    }
                }
            }
        });
    };

    useEffect(() => {
        if (window.Chart) {
            initializeChart();
        }
    }, []);

    return (
        <>
            <Script
                src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js"
                strategy="lazyOnload"
                onLoad={initializeChart}
            />
            <style jsx global>{`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #f8fafc; /* slate-50 */
                }
                .chartjs-tooltip-item {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }
            `}</style>
            <main className="antialiased text-slate-800 flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <div className="mb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">The Market Growth Trajectory</h1>
                        <p className="text-slate-500 mt-1">Global Nicotine Pouch Market Valuation: Historical & Projected (2018-2032)</p>
                    </div>

                    <div className="h-80 md:h-96 w-full">
                        <canvas id="marketGrowthChart" ref={chartRef}></canvas>
                    </div>

                    <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
                        <h3 className="font-semibold text-slate-800 mb-2">Key Insights:</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>This chart shows a smooth, unified curve representing the market's journey from infancy to a projected <strong>$30B+ industry</strong>.</li>
                            <li>The solid blue line represents the most realistic estimate, blending historical data with future projections.</li>
                            <li>Hover over the chart from 2025 onward to see the specific values for the <strong>Optimistic</strong>, <strong>Realistic</strong>, and <strong>Conservative</strong> forecasts.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}