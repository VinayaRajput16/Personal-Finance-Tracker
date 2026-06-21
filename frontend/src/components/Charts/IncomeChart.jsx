import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
    "#34d399", "#60a5fa", "#fbbf24", "#a78bfa",
    "#f87171", "#22d3ee", "#fb923c", "#f472b6",
];

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
            labels: { color: "#d4d4d8", padding: 16 },
        },
    },
};

const IncomeChart = ({ incomes }) => {
    const sourceTotals = incomes.reduce((acc, income) => {
        acc[income.source] = (acc[income.source] || 0) + income.amount;

        return acc;
    }, {});

    const labels = Object.keys(sourceTotals);

    const data = {
        labels,
        datasets: [
            {
                data: Object.values(sourceTotals),
                backgroundColor: labels.map((_, i) => COLORS[i % COLORS.length]),
                borderColor: "#18181b",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Income Sources</h3>

            {incomes.length > 0 ? (
                <Pie data={data} options={options} />
            ) : (
                <p className="text-zinc-500 text-sm">No income data available</p>
            )}
        </div>
    );
};

export default IncomeChart;