import api from "./axios";

// Get all income entries
export const getIncome = async () => {
const response = await api.get("/income");
return response.data;
};

// Add income
export const addIncome = async (incomeData) => {
const response = await api.post(
"/income",
incomeData
);

return response.data;
};

// Update income
export const updateIncome = async (
id,
incomeData
) => {
const response = await api.patch(
`/income/${id}`,
incomeData
);

return response.data;
};

// Delete income
export const deleteIncome = async (id) => {
const response = await api.delete(
`/income/${id}`
);

return response.data;
};
