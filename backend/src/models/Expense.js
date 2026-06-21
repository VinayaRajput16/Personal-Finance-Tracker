import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    },

    title: {
        type: String,
        required: true
    },

   amount: {
    type: Number,
    required: true
},

    categories: {
    type: [String],
    default: []
},

    date: {
        type: Date,
        default: Date.now
    }
});

const Expenses = mongoose.model("Expenses", expenseSchema);

export default Expenses;