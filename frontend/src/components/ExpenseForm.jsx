import { useState } from "react";
import { addExpense } from "../api/expenseApi";

const ExpenseForm = ({ onExpenseAdded }) => {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        categories: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const payload = {
                title: formData.title,
                amount: Number(formData.amount),
                categories: formData.categories
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean),
            };

            const data = await addExpense(payload);

            onExpenseAdded(data.expense);

            setFormData({
                title: "",
                amount: "",
                categories: "",
            });
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Failed to add expense");
        }
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Add Expense</h3>

            {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1.5" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="e.g. Groceries"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1.5" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        id="amount"
                        type="number"
                        name="amount"
                        placeholder="0.00"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1.5" htmlFor="categories">
                        Categories
                    </label>
                    <input
                        id="categories"
                        type="text"
                        name="categories"
                        placeholder="Food, Travel"
                        value={formData.categories}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full h-11 bg-white hover:bg-zinc-100 text-zinc-950 font-medium rounded-xl transition-all active:scale-[0.985]"
                >
                    Add Expense
                </button>
            </form>
        </div>
    );
};

export default ExpenseForm;