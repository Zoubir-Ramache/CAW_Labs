import React, { useEffect, useState } from 'react';

function Home() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      const transactions = JSON.parse(storedTransactions);
      const totalIncome = transactions.reduce((acc, curr) => curr.type === 'Income' ? acc + parseFloat(curr.amount) : acc, 0);
      const totalExpenses = transactions.reduce((acc, curr) => curr.type === 'Expense' ? acc + parseFloat(curr.amount) : acc, 0);
      const balance = totalIncome - totalExpenses;
      setTotalIncome(totalIncome);
      setTotalExpenses(totalExpenses);
      setBalance(balance);
    }
  }, []);

  return (
    <div className="text-green-700 bg-gray-100 p-4 rounded-lg shadow">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to Masroofy</h1>
      <h2 className="text-2xl font-bold text-center mb-2">Overview</h2>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-lg font-semibold">Total Income: ${totalIncome}</p>
        <p className="text-lg font-semibold">Total Expenses: ${totalExpenses}</p>
        <p className="text-lg font-semibold">Balance: ${balance}</p>
      </div>
      <nav className="mt-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="/add-transaction" className="text-blue-500 hover:text-blue-700 font-bold">Add Transaction</a></li>
          <li><a href="/transaction-list" className="text-blue-500 hover:text-blue-700 font-bold">Transaction List</a></li>
          <li><a href="/visual-reports" className="text-blue-500 hover:text-blue-700 font-bold">Visual Reports</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
