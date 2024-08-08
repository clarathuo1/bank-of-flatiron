import React, { useState } from 'react'



function TransactionForm({onSubmit}) {
    //initialize state for description and amount
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({description, amount});
        setDescription('');
        setAmount('');
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
      <button type="submit">Add Transaction</button>
    </form>
  )
    
  
}
export default TransactionForm;