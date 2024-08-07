import logo from './logo.svg';
import './App.css';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
function App() {
  return(
    <div className="App">
      <h1>Transactions App</h1>
      <TransactionTable />
    </div>
  )
}

export default App;
