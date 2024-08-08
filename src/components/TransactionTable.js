import React from 'react'
import TransactionRow from './TransactionRow';

//render table header

function TransactionTable({transactions}) {
  return (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
        {transactions.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
    </tbody>
    </table>
  )
}
export default TransactionTable;
