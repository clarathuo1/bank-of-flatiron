import React from 'react'


function TransactionRow({transaction,onDelete}) {
  const formattedAmount = typeof transaction.amount === 'number' ? transaction.amount.toFixed(2) : '0.00';

  //Handle delete button click
    const handleDelete = () => {
        onDelete(transaction.id);
    };

    //details of a single transaction
  return (
    <tr className='transaction-row'>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount.toFixed(2)}</td>
        <td>{formattedAmount}</td>
      <td><button onClick={handleDelete}>Delete</button></td>
        
    </tr>
    
  )
}
export default TransactionRow;
