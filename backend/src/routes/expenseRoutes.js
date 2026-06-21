import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { addExpense, getExpenses, editExpense, removeExpense } from '../controllers/expenseController.js';

const router = express.Router();

router.post('/', authMiddleware, addExpense);
router.get('/',authMiddleware, getExpenses);
router.patch('/:id',authMiddleware, editExpense);
router.delete('/:id',authMiddleware, removeExpense);

export default router; 