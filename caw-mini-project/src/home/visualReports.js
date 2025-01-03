import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
Chart.register(ArcElement, CategoryScale, LinearScale, BarElement)
function VisualReports() {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Income',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [pieChartData, setPieChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const storedData = localStorage.getItem('transactions');
    if (storedData) {
      
      
      const transactions = JSON.parse(storedData);
      const income = transactions.filter(transaction => transaction.type === 'Income');
      const expenses = transactions.filter(transaction => transaction.type === 'Expense');
      console.log(transactions);
      const categories = [...new Set(transactions.map(transaction => transaction.category))];
      const categoryAmounts = categories.map(category => ({
        name: category,
        total: transactions.filter(transaction => transaction.category === category).reduce((acc, curr) => acc + parseFloat(curr.amount), 0)
      }));

      const incomeData = income.map(transaction => parseFloat(transaction.amount));
      const expensesData = expenses.map(transaction => parseFloat(transaction.amount));
      const categoriesLabels = categories;
      const categoriesData = categoryAmounts.map(amount => amount.total);
      const categoriesColors = categories.map(category => ({ r: 255, g: 99, b: 132 })); // Assuming a default color for simplicity

      setChartData({
        ...chartData,
        labels: income.map(transaction => transaction.date),
        datasets: [
          {
            ...chartData.datasets[0],
            data: incomeData,
          },
          {
            ...chartData.datasets[1],
            data: expensesData,
          },
        ],
      });

      setPieChartData({
        ...pieChartData,
        labels: categoriesLabels,
        datasets: [
          {
            ...pieChartData.datasets[0],
            data: categoriesData,
            backgroundColor: categoriesColors.map(color => `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`),
            borderColor: categoriesColors.map(color => `rgba(${color.r}, ${color.g}, ${color.b}, 1)`),
          },
        ],
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Visual Reports</h2>
      <div className="flex justify-between gap-1 w-full">
        <div className="w-1/2 h-80 border border-gray-300 rounded-lg p-4">
          <Bar data={chartData} options={{ indexAxis: 'x' }} />
        </div>
        <div className="w-1/2 h-80 border flex justify-center items-center  border-gray-300 rounded-lg p-4">
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
}

export default VisualReports;
