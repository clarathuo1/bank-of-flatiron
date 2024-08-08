import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import TransactionForm from './TransactionForm'
import TransactionTable from './TransactionTable'
import SearchBar from './SearchBar'

function Home() {
  
    //initialize state for transactions and search term
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //fetch transactions

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
          .then(response => response.json())
          .then(data => {
            const updatedData = data.map(transaction => ({
              ...transaction,
              amount: parseFloat(transaction.amount)
          }));
          setTransactions(updatedData);
      });
}, []);
          

      //handle form submission to add a new transaction
      const handleSubmit = (newTransaction) => {
        fetch('http://localhost:3000/transactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTransaction),
        })
          .then(response => response.json())
          .then(data => setTransactions([...transactions, data]));
      };

      //handle search input changes
      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

      //handle delete transaction
      const handleDelete = (transactionId) => {
        fetch(`http://localhost:3000/transactions/${transactionId}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(() => setTransactions(transactions.filter(transaction => transaction.id !== transactionId)));
      };

      //filter transactions based on search term
    
      const filteredTransactions = transactions.filter((transaction) => {
        const description = transaction.description || '';
        const amount = transaction.amount !== undefined ? transaction.amount.toString() : '';
        const date = transaction.date || '';
        const category = transaction.category || '';
        
        return (
          description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            amount.includes(searchTerm) ||
            date.includes(searchTerm) ||
            category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

          //render components
    return(
        <div className="container">
      <h1>Bank Of Flatiron</h1>
      <SearchBar value={searchTerm} onChange={handleSearch} className="search-bar"/>
      <TransactionForm onSubmit={handleSubmit} />
      <TransactionTable transactions={filteredTransactions} onDelete={handleDelete}  />

    </div>
    );

}
export default Home;






