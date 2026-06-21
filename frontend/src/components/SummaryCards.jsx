const SummaryCards = ({ incomes, expenses }) => {
    const totalIncome = incomes.reduce(
        (total, income) => total + income.amount,
        0
    );

    const totalExpenses = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );

    const balance = totalIncome - totalExpenses;

    const cards = [
        {
            label: "Total Income",
            value: totalIncome,
            valueColor: "text-emerald-400",
        },
        {
            label: "Total Expenses",
            value: totalExpenses,
            valueColor: "text-rose-400",
        },
        {
            label: "Balance",
            value: balance,
            valueColor: balance >= 0 ? "text-white" : "text-rose-400",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {cards.map((card) => (
                <div
                    key={card.label}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                >
                    <h3 className="text-sm font-medium text-zinc-400">
                        {card.label}
                    </h3>
                    <p className={`mt-2 text-2xl font-semibold ${card.valueColor}`}>
                        ₹{card.value.toLocaleString("en-IN")}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;