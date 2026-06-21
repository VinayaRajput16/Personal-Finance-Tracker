import Expenses from '../models/Expense.js';

export const addExpense = async (req, res, next) => {
    try {
        const { title, amount, categories } = req.body;

        const newExpense = await Expenses.create({
            user: req.userId,
            title,
            amount,
            categories
        });

        res.status(201).json({
            message: 'Expense added',
            expense: newExpense
        });

    } catch (err) {
        next(err);
    }
};

export const getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expenses.find({
            user: req.userId
        });

        res.status(200).json({
            message: 'Expenses fetched successfully',
            expenses
        });

    } catch (err) {
        next(err);
    }
};

export const editExpense = async (req, res, next) => {
    try {
        const { id } = req.params;

        const updatedExpense = await Expenses.findOneAndUpdate(
            {
                _id: id,
                user: req.userId
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedExpense) {
            return res.status(404).json({
                message: 'Expense not found'
            });
        }

        res.status(200).json({
            message: 'Expense updated successfully',
            expense: updatedExpense
        });

    } catch (err) {
        next(err);
    }
};

export const removeExpense = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedExpense = await Expenses.findOneAndDelete({
            _id: id,
            user: req.userId
        });

        if (!deletedExpense) {
            return res.status(404).json({
                message: 'Expense not found'
            });
        }

        res.status(200).json({
            message: 'Expense deleted successfully'
        });

    } catch (err) {
        next(err);
    }
};