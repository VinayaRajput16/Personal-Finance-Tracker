import { deleteIncome } from "../api/incomeApi";

const IncomeList = ({ incomes, setIncomes }) => {
    const handleDelete = async (id) => {
        try {
            await deleteIncome(id);

            setIncomes(
                incomes.filter((income) => income._id !== id)
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Income List</h3>

            {incomes.length === 0 ? (
                <p className="text-zinc-500 text-sm">No income found</p>
            ) : (
                <ul className="space-y-3">
                    {incomes.map((income) => (
                        <li
                            key={income._id}
                            className="flex items-center justify-between gap-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl"
                        >
                            <p className="text-white font-medium">{income.source}</p>

                            <div className="flex items-center gap-3 shrink-0">
                                <span className="text-emerald-400 font-medium">
                                    ₹{income.amount}
                                </span>
                                <button
                                    onClick={() => handleDelete(income._id)}
                                    className="text-zinc-500 hover:text-red-400 text-sm transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default IncomeList;