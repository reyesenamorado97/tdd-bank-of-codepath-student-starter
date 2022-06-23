import * as React from "react"
import { useEffect, setState } from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import axios from "axios"
import "./Home.css"

export default function Home({
  transactions,
  setTransactions,
  transfers,
  setTransfers,
  setError,
  isLoading,
  setIsLoading,
  filterInputValue,
  newTransactionForm,
  setNewTransactionForm,
  isCreating,
  setIsCreating,
  error
}) {

  
  
  useEffect(() => {
      setIsLoading(true);

       axios.get("http://localhost:3001/bank/transfers")
      .then((response) => {setTransfers(response.data.transfers)
        
      })
      .catch((error)=>{setError(error)
        console.log(error)
      })

       axios.get("http://localhost:3001/bank/transactions")
      .then((response) => {setTransactions(response.data.transfers)
      })
      .catch((error)=>{setError(error)
        console.log(error)
      })
      setIsLoading(false);

  }, [])


  let filteredTransactions = []
  
  if (filterInputValue && transactions!=null) {
     filteredTransactions = transactions.filter((current) =>{
      return (current.description.toLowerCase().includes(filterInputValue.toLowerCase())) 
    })
  }
  else {
    filteredTransactions = transactions
  }

const handleOnCreateTransaction =  () => {
  setIsCreating(true)
  
    axios.post(`http://localhost:3001/bank/transactions/`,{ newTransactionForm: {description: ''} })    
    .then ((response) => {
      console.log(newTransactionForm)

        setNewTransactionForm(response?.data?.transaction)
        setTransactions(transactions.push(newTransactionForm))   
       }
        )
        
    .catch((error)=>{setError(error)
      setIsCreating(false)

      console.log(error)

    })
    setNewTransactionForm({
      description: "",
      category: "",
      amount: "",
    });

  setIsCreating(false)
}


  return (
    
    <div className="home">

          
      <AddTransaction 
      form={newTransactionForm}
      setForm={setNewTransactionForm}
      isCreating={isCreating}
      setIsCreating={setIsCreating}
      handleOnSubmit={handleOnCreateTransaction}
      />
      {isLoading ? <h1>Loading...</h1>:<BankActivity transactions={filteredTransactions} />}


      <h2 className="error">{error}</h2>
    </div>
  )
}
