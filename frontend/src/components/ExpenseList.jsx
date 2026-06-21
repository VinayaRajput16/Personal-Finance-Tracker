import { deleteExpense } from "../api/expenseApi";

const ExpenseList = ({ expenses, setExpenses }) => {
    const handleDelete = async (id) => {
        try {
            await deleteExpense(id);

            setExpenses(
                expenses.filter((expense) => expense._id !== id)
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Expense List</h3>

            {expenses.length === 0 ? (
                <p className="text-zinc-500 text-sm">No expenses found</p>
            ) : (
                <ul className="space-y-3">
                    {expenses.map((expense) => (
                        <li
                            key={expense._id}
                            className="flex items-start justify-between gap-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl"
                        >
                            <div>
                                <p className="text-white font-medium">{expense.title}</p>
                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                    {expense.categories.map((category) => (
                                        <span
                                            key={category}
                                            className="px-2 py-0.5 text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                                <span className="text-rose-400 font-medium">
                                    ₹{expense.amount}
                                </span>
                                <button
                                    onClick={() => handleDelete(expense._id)}
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

export default ExpenseList;