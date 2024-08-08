import React from 'react'

function TransactionRow({transaction}) {
    //details of a single transaction
  return (
    <tr>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
    </tr>
  )
}
export default TransactionRow;
