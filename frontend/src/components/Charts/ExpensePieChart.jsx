import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
    "#60a5fa", "#34d399", "#fbbf24", "#f87171",
    "#a78bfa", "#22d3ee", "#fb923c", "#f472b6",
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

const ExpensePieChart = ({ expenses }) => {
    const categoryTotals = expenses.reduce((acc, expense) => {
        expense.categories.forEach((category) => {
            acc[category] = (acc[category] || 0) + expense.amount;
        });

        return acc;
    }, {});

    const labels = Object.keys(categoryTotals);

    const data = {
        labels,
        datasets: [
            {
                data: Object.values(categoryTotals),
                backgroundColor: labels.map((_, i) => COLORS[i % COLORS.length]),
                borderColor: "#18181b",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Expenses By Category</h3>

            {labels.length > 0 ? (
                <Pie data={data} options={options} />
            ) : (
                <p className="text-zinc-500 text-sm">No expense data available</p>
            )}
        </div>
    );
};

export default ExpensePieChart;