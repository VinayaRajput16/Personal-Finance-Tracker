import Income from "../models/Income.js";

export const addIncome = async (req, res, next) => {
    try {
        const { source, amount } = req.body;

        const newIncome = await Income.create({
            user: req.userId,
            source,
            amount
        });

        res.status(201).json({
            message: "Income added successfully",
            income: newIncome
        });

    } catch (err) {
        next(err);
    }
};

export const getIncome = async (req, res, next) => {
    try {
        const incomes = await Income.find({
            user: req.userId
        });

        res.status(200).json({
            message: "Income fetched successfully",
            incomes
        });

    } catch (err) {
        next(err);
    }
};

export const editIncome = async (req, res, next) => {
    try {
        const { id } = req.params;

        const updatedIncome = await Income.findOneAndUpdate(
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

        if (!updatedIncome) {
            return res.status(404).json({
                message: "Income not found"
            });
        }

        res.status(200).json({
            message: "Income updated successfully",
            income: updatedIncome
        });

    } catch (err) {
        next(err);
    }
};

export const removeIncome = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedIncome = await Income.findOneAndDelete({
            _id: id,
            user: req.userId
        });

        if (!deletedIncome) {
            return res.status(404).json({
                message: "Income not found"
            });
        }

        res.status(200).json({
            message: "Income deleted successfully"
        });

    } catch (err) {
        next(err);
    }
};