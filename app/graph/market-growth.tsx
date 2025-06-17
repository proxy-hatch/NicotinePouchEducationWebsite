<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nicotine Pouch Market Growth Trajectory (2018-2032)</title>

<!-- Tailwind CSS for styling -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Chart.js for the graph -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js"></script>

<!-- Google Fonts: Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

            <style>
                body {
                font-family: 'Inter', sans-serif;
                background-color: #f8fafc; /* slate-50 */
            }
            </style>
        </head>
        <body class="antialiased text-slate-800 flex items-center justify-center min-h-screen p-4">

        <!-- Chart container with modern styling -->
        <div class="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div class="mb-6">
                <h1 class="text-2xl md:text-3xl font-bold text-slate-900">The Market Growth Trajectory</h1>
                <p class="text-slate-500 mt-1">Global Nicotine Pouch Market Valuation: Historical & Projected (2018-2032)</p>
            </div>

            <!-- Canvas for the chart -->
            <div class="h-80 md:h-96 w-full">
                <canvas id="marketGrowthChart"></canvas>
            </div>

            <!-- Key takeaways -->
            <div class="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
                <h3 class="font-semibold text-slate-800 mb-2">Key Insights:</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>This chart shows a smooth, unified curve representing the market's journey from infancy to a projected <strong>$40B+ industry</strong>.</li>
                    <li>The solid blue line represents the analyst best-fit estimate, blending historical data with future projections.</li>
                    <li>The shaded area illustrates the full market potential, from conservative (low) to optimistic (high) forecasts.</li>
                </ul>
            </div>
        </div>

        <script>
            // --- Data Setup ---
            const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'];

            // Historical data points
            const historicalBestFit = [0.3, 0.8, 1.8, 2.7, 4.7, 7.4];
            const historicalLow = [0.2, 0.5, 1.0, 2.0, 3.45, 2.04];
            const historicalHigh = [0.5, 1.0, 2.0, 3.0, 4.7, 7.4];

            // Future projection points
            const projectedBestFitPoints = { '2029': 18.7, '2030': 25.4, '2031': 34.06, '2032': 42.72 };

            // --- Function to create smooth curve data ---
            // This function connects historical data to future anchor points with a smooth progression.
            function createFullCurve(historicalData, futurePoints) {
            const fullData = [...historicalData];
            let lastValue = historicalData[historicalData.length - 1];
            let lastYearIndex = historicalData.length - 1;

            for (const yearStr in futurePoints) {
            const yearIndex = years.indexOf(yearStr);
            const targetValue = futurePoints[yearStr];

            const periods = yearIndex - lastYearIndex;
            // Use compound growth to fill gaps smoothly
            const rate = Math.pow(targetValue / lastValue, 1 / periods) - 1;

            for (let i = 1; i <= periods; i++) {
            fullData[lastYearIndex + i] = lastValue * Math.pow(1 + rate, i);
        }

            lastValue = targetValue;
            lastYearIndex = yearIndex;
        }
            return fullData.map(v => v ? v.toFixed(2) : null);
        }

            // --- Generate full datasets for the chart ---
            const fullBestFitData = createFullCurve(historicalBestFit, projectedBestFitPoints);
            // For Low/High, we project from the last 'best-fit' value for a more realistic curve,
            // using a rate that hits a reasonable low/high target.
            const lowTarget = { '2032': 25.4 }; // Conservative end-point
            const highTarget = { '2032': 55.0 }; // Optimistic end-point
            const fullLowData = createFullCurve(historicalLow, lowTarget);
            const fullHighData = createFullCurve(historicalHigh, highTarget);


            // --- Chart Configuration ---
            const ctx = document.getElementById('marketGrowthChart').getContext('2d');
            const marketChart = new Chart(ctx, {
            type: 'line',
            data: {
            labels: years,
            datasets: [
        {
            label: 'Optimistic Projection',
            data: fullHighData,
            borderColor: 'transparent',
            pointRadius: 0,
            fill: '+1',
            backgroundColor: 'rgba(14, 165, 233, 0.1)', // Light sky blue fill
        },
        {
            label: 'Conservative Projection',
            data: fullLowData,
            borderColor: 'transparent',
            pointRadius: 0,
        },
        {
            label: 'Best-Fit Estimate',
            data: fullBestFitData,
            borderColor: '#0ea5e9', // sky-500
            borderWidth: 3.5,
            pointBackgroundColor: '#0ea5e9',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#0ea5e9',
            pointRadius: (context) => (context.dataIndex === 0 || context.dataIndex === years.length - 1) ? 5 : 0,
            pointHoverRadius: 6,
            tension: 0.4, // This creates the smooth curve
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
            grid: {
            color: 'rgba(226, 232, 240, 0.7)',
            borderDash: [3, 3],
        },
            ticks: {
            callback: function(value) { return '$' + value + 'B'; },
            color: '#64748b',
            font: { weight: '500' }
        },
            title: {
            display: true,
            text: 'Market Valuation (in Billions USD)',
            color: '#475569',
            font: { size: 14 }
        }
        },
            x: {
            grid: { display: false },
            ticks: {
            color: '#64748b',
            font: { weight: '500' }
        }
        }
        },
            plugins: {
            legend: { display: false },
            tooltip: {
            backgroundColor: '#1e293b',
            titleColor: '#f1f5f9',
            bodyColor: '#cbd5e1',
            titleFont: { weight: 'bold' },
            bodyFont: { size: 13 },
            padding: 12,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
            label: function(context) {
            // Only show tooltip for the main 'Best-Fit' line
            if (context.dataset.label === 'Best-Fit Estimate' && context.parsed.y !== null) {
            return 'Est. Value: $' + context.parsed.y + ' Billion';
        }
            return null;
        }
        }
        }
        }
        }
        });
        </script>
        </body>
    </html>

