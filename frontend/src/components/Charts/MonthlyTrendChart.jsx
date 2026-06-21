import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const options = {
    responsive: true,
    plugins: {
        legend: { labels: { color: "#d4d4d8" } },
    },
    scales: {
        x: {
            ticks: { color: "#a1a1aa" },
            grid: { color: "#27272a" },
        },
        y: {
            ticks: { color: "#a1a1aa" },
            grid: { color: "#27272a" },
        },
    },
};

const MonthlyTrendChart = ({ expenses, incomes }) => {
    const monthlyExpense = Array(12).fill(0);
    const monthlyIncome = Array(12).fill(0);

    expenses.forEach((expense) => {
        const month = new Date(expense.date).getMonth();
        monthlyExpense[month] += expense.amount;
    });

    incomes.forEach((income) => {
        const month = new Date(income.date).getMonth();
        monthlyIncome[month] += income.amount;
    });

    const data = {
        labels: months,
        datasets: [
            {
                label: "Income",
                data: monthlyIncome,
                backgroundColor: "#34d399",
                borderRadius: 4,
            },
            {
                label: "Expenses",
                data: monthlyExpense,
                backgroundColor: "#f87171",
                borderRadius: 4,
            },
        ],
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Monthly Trends</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MonthlyTrendChart;