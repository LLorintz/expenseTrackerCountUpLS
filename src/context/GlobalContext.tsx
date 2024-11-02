import  { createContext, ReactNode, useEffect, useState } from 'react'

type transactionType={
    id: number;
    text: string;
    amount: number;
}

type GlobalProviderProps={
    children: ReactNode;
}

type GlobalState={
    transactions:transactionType[];
    deleteTransaction:(id:number)=>void;
    addTransaction:(t:transactionType)=>void;
}

const initialstate={
    transactions:[
        {id:1, text: "Flowers", amount:-30},
        {id:2, text: "Salary", amount:300},
        {id:3, text: "Tickets", amount:-20}
    ]
}

export const GlobalContext = createContext<GlobalState>(
{   
    transactions: initialstate.transactions,
    deleteTransaction:()=>{},
    addTransaction:()=>{},
}
)


const GlobalProvider = ({children}:GlobalProviderProps) => {
    const [transactions, setTransactions] = useState<transactionType[]>(  
        ()=>{
            const storedTransactions = localStorage.getItem('transactions')
            return storedTransactions ? JSON.parse(storedTransactions) : initialstate.transactions 
        })


    const deleteTransaction = (id:number)=>{
        setTransactions(transactions.filter(transaction=>transaction.id!==id))
    }

    const addTransaction = (t:transactionType)=>{
        setTransactions(prev=>([...prev,t]))
    }

    useEffect(()=>{
        localStorage.setItem('transactions', JSON.stringify(transactions))
    },[transactions])
    
    return (
        <GlobalContext.Provider value={{transactions,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider