import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Transaction from "./Transaction"

const TransactionList = () => {

  const {transactions} = useContext(GlobalContext)

  return (
    <div >
        <h3>History</h3>
        <ul className="list"> 
            {transactions.map((item) => (
              <Transaction key={item.id} {...item}></Transaction>
            ))}
        </ul>
    </div>
  )
}

export default TransactionList