import { useState } from "react";
import { addIncome } from "../api/incomeApi";

const IncomeForm = ({ onIncomeAdded }) => {
    const [formData, setFormData] = useState({
        source: "",
        amount: "",
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
                source: formData.source,
                amount: Number(formData.amount),
            };

            const data = await addIncome(payload);

            onIncomeAdded(data.income);

            setFormData({
                source: "",
                amount: "",
            });
        } catch (err) {
            console.error("Failed to add income:", err);
            setError(err.response?.data?.message || "Failed to add income");
        }
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Add Income</h3>

            {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1.5" htmlFor="source">
                        Income Source
                    </label>
                    <input
                        id="source"
                        type="text"
                        name="source"
                        placeholder="e.g. Salary"
                        value={formData.source}
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

                <button
                    type="submit"
                    className="w-full h-11 bg-white hover:bg-zinc-100 text-zinc-950 font-medium rounded-xl transition-all active:scale-[0.985]"
                >
                    Add Income
                </button>
            </form>
        </div>
    );
};

export default IncomeForm;