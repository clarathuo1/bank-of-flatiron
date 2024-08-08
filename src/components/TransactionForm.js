import React, { useState } from 'react'

function TransactionForm({onSubmit}) {
    //initialize state for description and amount
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({description, amount, date, category,amount: parseFloat(amount)});
        setDescription('');
        setAmount('');
        setDate('');
        setCategory('');
    }

    //render form
  return (
    <form onSubmit={handleSubmit}>
        <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value = {date} onChange={(event) => setDate(event.target.value)}/>
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      </label>
      
      
      <button type="submit">Add Transaction</button>
    </form>
  )
    
  
}
export default TransactionForm;