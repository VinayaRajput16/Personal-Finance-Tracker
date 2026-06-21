# Personal Finance Tracker

A full-stack web application that helps users manage their personal finances by tracking income and expenses, visualizing spending patterns, and monitoring financial health through an interactive dashboard.

## Features

### Authentication

* User Registration
* User Login
* JWT-based Authentication
* Protected Routes
* Secure Password Hashing using bcrypt

### Expense Management

* Add Expenses
* View Expenses
* Delete Expenses
* Categorize Expenses
* Track Expense History

### Income Management

* Add Income Sources
* View Income Records
* Delete Income Entries
* Track Income History

### Dashboard

* Total Income Summary
* Total Expense Summary
* Current Balance Overview
* Recent Financial Records

### Financial Reports

* Expense Distribution Pie Chart
* Income Distribution Pie Chart
* Monthly Income vs Expense Trend Chart
* Visual Financial Analytics using Chart.js

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Chart.js
* React ChartJS 2
* Vite

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB
* Mongoose

## Project Structure

```text
frontend/
├── src
│   ├── api
│   │   ├── axios.js
│   │   ├── authApi.js
│   │   ├── expenseApi.js
│   │   └── incomeApi.js
│   │
│   ├── components
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── IncomeForm.jsx
│   │   ├── IncomeList.jsx
│   │   ├── Navbar.jsx
│   │   ├── SummaryCards.jsx
│   │   └── Charts
│   │       ├── ExpensePieChart.jsx
│   │       ├── IncomeChart.jsx
│   │       └── MonthlyTrendChart.jsx
│   │
│   ├── pages
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Dashboard.jsx
│   │
│   └── App.jsx
```

## API Endpoints

### Authentication

```http
POST /auth/register
POST /auth/login
```

### Expenses

```http
GET    /expenses
POST   /expenses
PATCH  /expenses/:id
DELETE /expenses/:id
```

### Income

```http
GET    /income
POST   /income
PATCH  /income/:id
DELETE /income/:id
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd personal-finance-tracker
```

### Backend Setup

```bash
cd backend

npm install
```

Create a .env file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```

Start backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install
```

Create a .env file:

```env
VITE_API_URL=http://localhost:3000
```

Start frontend:

```bash
npm run dev
```

## Usage

1. Register a new account.
2. Login using your credentials.
3. Add income sources.
4. Add expenses with categories.
5. View financial summaries.
6. Analyze spending through charts.
7. Monitor monthly financial trends.

## Future Enhancements

* Edit Income and Expense Records
* Budget Planning
* Savings Goals
* Recurring Transactions
* Expense Filtering and Search
* Export Reports (PDF/Excel)
* Dark Mode
* User Profile Management

## Learning Outcomes

This project demonstrates:

* Full-Stack MERN Development
* REST API Design
* JWT Authentication
* CRUD Operations
* MongoDB Data Modeling
* State Management in React
* Data Visualization with Chart.js
* Client-Server Communication using Axios

## Author

Vinaya Rajput

B.Sc. Computer Science | Full Stack Developer
