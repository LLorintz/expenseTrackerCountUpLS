import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import CountUp from "react-countup"

const Balance = () => {
const {transactions} = useContext(GlobalContext)

const amounts = transactions.map(transaction=>(transaction.amount))
const total = amounts.reduce((total,item) =>(total+=item),0).toFixed(2)


return (
    <div className="balanceContainer">
        <h3>Your Balance</h3>
        <h4><CountUp
        start={0}
        end={parseInt(total)}
        duration={1.5}
        separator=" " // Add a comma as a thousand separator
        decimals={2} // Display two decimal places
        prefix="$" // Add dollar sign as a prefix
        /></h4>
    </div>
  )
}

export default Balance