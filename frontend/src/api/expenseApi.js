import api from "./axios";

// Get all expenses
export const getExpenses = async () => {
const response = await api.get("/expenses");
return response.data;
};

// Add expense
export const addExpense = async (expenseData) => {
const response = await api.post(
"/expenses",
expenseData
);
return response.data;
};

// Update expense
export const updateExpense = async (
id,
expenseData
) => {
const response = await api.patch(
`/expenses/${id}`,
expenseData
);
return response.data;
};

// Delete expense
export const deleteExpense = async (id) => {
const response = await api.delete(
`/expenses/${id}`
);
return response.data;
};
