import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import IncomExpense from "./components/IncomExpense"
import GlobalProvider from "./context/GlobalContext"
import './app.css'

function App() {

  return (
    <div className="container">
    <GlobalProvider>
      <Header></Header>
      <Balance></Balance>
      <IncomExpense></IncomExpense>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
     </GlobalProvider>
    </div>
  )
}

export default App
