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
          .then(data => setTransactions(data));
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

      //filter transactions based on search term
    const filteredTransactions = transactions.filter((transaction) => {
         return (
         transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.amount.toString().includes(searchTerm)
            );
          });

          //render components
    return(
        <div>
      <h1>Bank Of Flatiron</h1>
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <TransactionForm onSubmit={handleSubmit} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
    );

}
export default Home;






