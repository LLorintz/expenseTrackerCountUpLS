import React, { FormEvent, useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"


const AddTransaction = () => {

  const {addTransaction} = useContext(GlobalContext);
  const [text,setText] = useState('');
  const [amount,setAmount] = useState<number>(0);

  const handleTextChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }

  const handleAmountChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setAmount(Number(e.target.value))
  }

  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault()
    const newTransaction = {
      id:Math.floor(Math.random()*10000000),
      text:text,
      amount: amount,
    }
    addTransaction(newTransaction)
  }

  return (
    <div>
        <h3>Add transaction</h3>
        <form onSubmit={handleSubmit} action="">
            <div className="form-control">
                <label htmlFor="text">text</label>
                <input value={text} onChange={handleTextChange} type="text" placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="">negative-expense, positive-income</label>
                <input value={amount} onChange={handleAmountChange} type="number" />
            </div>
            <button className="btn" type="submit">Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction