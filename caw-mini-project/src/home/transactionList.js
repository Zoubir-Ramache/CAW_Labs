import React, { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    // fetch transactions and categories from locale storage
    const storedTransactions = localStorage.getItem('transactions');
    const storedCategories = localStorage.getItem('categories');

    if(!storedCategories){

      setCategories([
        'Groceries',
        'Transportation',
        'Entertainment',
        'Other'
      ])
    
    }else if (storedTransactions ) {
      const parsedTransactions = JSON.parse(storedTransactions);
      const parsedCategories = JSON.parse(storedCategories);

      
      
      setTransactions(parsedTransactions);
      setCategories(parsedCategories);
    }
  }, []);
  const handleFilterCategoryChange = (event) => {
    setFilterCategory(event.target.value);
    const filteredTransactions = transactions.filter((transaction) => transaction.category === event.target.value || event.target.value === '');
    setFilteredTransactions(filteredTransactions);
  };

  const handleFilterDateChange = (event) => {
    setFilterDate(event.target.value);
    
    
    const filteredTransactions = transactions.filter((transaction) => transaction.date === event.target.value);
    setFilteredTransactions(filteredTransactions);
  };

  const handleEditTransaction = (transactionId) => {
    // implement edit transaction logic
    
  };

  const handleDeleteTransaction = (transactionId) => {
    // implement delete transaction logic
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== transactionId);
    setTransactions(updatedTransactions);
    // update the locale storage data 
  localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transaction List</h2>
      <form className="mb-4">
        <label className="block mb-2">
          Filter by Category:
          <select value={filterCategory} onChange={handleFilterCategoryChange} className="form-select block w-full p-2 text-lg rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="block mb-2">
          Filter by Date:
          <input type="date" value={filterDate} onChange={handleFilterDateChange} className="form-input block w-full p-2 text-lg rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </label>
        <br />
      </form>
      <ul className="list-disc pl-5">
        {filteredTransactions.length > 0 ? (
            <>
            
            <h1>filtred transactions :</h1>
            {
          filteredTransactions.map((transaction , index) => (
            <li key={transaction.transactionName +index} className="mb-2">
              <span className="text-lg font-medium">
                {transaction.transactionName} - {transaction.amount} - {transaction.date} - {transaction.category} - {transaction.type} - {transaction.notes}
              </span>
              <button onClick={() => handleEditTransaction(transaction.id)} className="ml-2 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700">Edit</button>
              <button onClick={() => handleDeleteTransaction(transaction.id)} className="ml-2 px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700">Delete</button>
            </li>
          ))}
          </>
        ) : (
          <div>
          <h1>No transactions found</h1>
          <hr/>
          <h2>All transactions :</h2>
          {transactions.map((transaction , index) => (
            <li key={transaction.transactionName +index} className="mb-2">
              <span className="text-lg font-medium">
                {transaction.transactionName} - {transaction.amount} - {transaction.date} - {transaction.category} - {transaction.type} - {transaction.notes}
              </span>
              <button onClick={() => handleEditTransaction(transaction.id)} className="ml-2 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700">Edit</button>
              <button onClick={() => handleDeleteTransaction(transaction.id)} className="ml-2 px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700">Delete</button>
            </li>
          ))}          
        </div>
        )}
      </ul>
    </div>
  );
}

export default TransactionList;

