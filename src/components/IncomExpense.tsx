import { useContext } from "react"
import{ GlobalContext } from "../context/GlobalContext"

const IncomExpense = () => {

  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction=>transaction.amount)
  const income = amounts.filter(item=>item>0)
  .reduce((total,item)=>(total+=item),0).toFixed(2)
  const expense = amounts.filter(item=>item<0)
  .reduce((total,item)=>(total+=item),0).toFixed(2)

  return (
    <div className="incExpContainer">
            <div className="income">
                <p className="p">INCOME</p>
                <p>${income}</p>
            </div>
            <div className="expense">
                <p className="p">EXPENSE</p>
                <p>-${Math.abs(parseInt(expense))}</p>
            </div>
        </div>
  )
}

export default IncomExpense