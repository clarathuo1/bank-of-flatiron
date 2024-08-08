import React from 'react'
import TransactionRow from './TransactionRow';

//render table header

function TransactionTable({transactions,onDelete}) {
  return (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Actions</th> {/* New column for actions */}
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    
    </table>
  )
}
export default TransactionTable;
