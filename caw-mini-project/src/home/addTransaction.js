import React, { useState, useEffect } from 'react';

function AddTransaction() {
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');
  const [type, setType] = useState('');
  const [categories, setCategories] = useState(['Groceries',
    'Transportation',
    'Entertainment',
    'Other']);
  

  useEffect(() => {
    
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }else{
      localStorage.setItem('categories', JSON.stringify(categories));
    }
      
  }, []);

  const handleTransactionNameChange = (event) => {
    setTransactionName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCategoryChange = (event) => {

    setCategory(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to submit the transaction
    if (!transactionName || !amount || !date || !category || !notes || !type) {
      console.log('Missing fields:', {
        transactionName: transactionName,
        amount: amount,
        date: date,
        category: category,
        notes: notes,
        type: type,
      });
      alert('All fields are required.');
      return;
    }
    const transaction = {
      transactionName,
      amount,
      date,
      category,
      notes,
      type, 
      id:Math.random()*Number(date)
    };
    console.log(transaction);
    // Save the transaction to local storage as an array of transactions
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      const transactions = JSON.parse(storedTransactions);
      transactions.push(transaction);
      localStorage.setItem('transactions', JSON.stringify(transactions));
    } else {
      localStorage.setItem('transactions', JSON.stringify([transaction]));
    }
    // Redirect to the transaction list page
    window.location.href = '/transaction-list';
    
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label className="block text-lg font-medium mb-2" htmlFor="transactionName">Transaction Name:</label>
          <input
            type="text"
            id="transactionName"
            value={transactionName}
            onChange={handleTransactionNameChange}
            required
            className="form-input block w-full p-2 text-lg rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="form-group">
          <label className="block text-lg font-medium mb-2" htmlFor="amount">Amount (in DZD):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
            className="form-input block w-full p-2 text-lg rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="form-group">
          <label className="block text-lg font-medium mb-2" htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
            className="form-input block w-full p-2 text-lg rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="form-group">
          <label className="block text-lg font-medium mb-2" htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
            className="form-select block w-full p-2 text-lg rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="block text-lg font-medium mb-2" htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={handleNotesChange}
            required
            className="form-textarea block w-full p-2 text-lg rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="form-group">
          <label className="block text-lg font-medium mb-2" htmlFor="type">Type:</label>
          <div className="flex space-x-4">
            <div>
              <input
                type="radio"
                id="income"
                name="type"
                value="Income"
                onChange={handleTypeChange}
                
              />
              <label className="ml-2" htmlFor="income">Income</label>
            </div>
            <div>
              <input
                type="radio"
                id="expense"
                name="type"
                value="Expense"
                onChange={handleTypeChange}
                
              />
              <label className="ml-2" htmlFor="expense">Expense</label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;

