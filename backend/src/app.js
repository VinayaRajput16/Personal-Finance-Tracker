import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
import notFound from './middlewares/notFound.js';
import incomeRoutes from './routes/incomeRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
// app.use(cors({
//     origin: process.env.CLIENT_URL
// }));
app.use(express.json());

console.log("APP LOADED");

app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);
app.use('/income', incomeRoutes);

console.log("AUTH ROUTES MOUNTED");

app.use(notFound);
app.use(errorHandler);

export default app;