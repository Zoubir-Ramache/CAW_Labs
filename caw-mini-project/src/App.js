import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import AddTransaction from './home/addTransaction';
import TransactionList from './home/transactionList';
import VisualReports from './home/visualReports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/transaction-list" element={<TransactionList />} />
        <Route path="/visual-reports" element={<VisualReports />} />
      </Routes>
    </Router>
  );
}

export default App;
