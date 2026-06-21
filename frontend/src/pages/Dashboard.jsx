import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import IncomeForm from "../components/IncomeForm";
import IncomeList from "../components/IncomeList";
import ExpensePieChart from "../components/Charts/ExpensePieChart";
import IncomeChart from "../components/Charts/IncomeChart";
import MonthlyTrendChart from "../components/Charts/MonthlyTrendChart";
import { getExpenses } from "../api/expenseApi";
import { getIncome } from "../api/incomeApi";

function Dashboard() {
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/immutability
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setIsLoading(true);

            const expenseData = await getExpenses();
            const incomeData = await getIncome();

            setExpenses(expenseData.expenses);
            setIncomes(incomeData.incomes);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950">
            <Navbar />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
                {isLoading ? (
                    <div className="flex items-center justify-center py-24">
                        <div className="w-8 h-8 border-2 border-zinc-700 border-t-white rounded-full animate-spin" />
                    </div>
                ) : (
                    <>
                        <SummaryCards incomes={incomes} expenses={expenses} />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <ExpenseForm
                                onExpenseAdded={(expense) =>
                                    setExpenses((prev) => [...prev, expense])
                                }
                            />

                            <IncomeForm
                                onIncomeAdded={(income) =>
                                    setIncomes((prev) => [...prev, income])
                                }
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <ExpenseList
                                expenses={expenses}
                                setExpenses={setExpenses}
                            />

                            <IncomeList
                                incomes={incomes}
                                setIncomes={setIncomes}
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <ExpensePieChart expenses={expenses} />
                            <IncomeChart incomes={incomes} />
                        </div>

                        <MonthlyTrendChart
                            expenses={expenses}
                            incomes={incomes}
                        />
                    </>
                )}
            </main>
        </div>
    );
}

export default Dashboard;