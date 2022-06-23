import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import {useState} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"


export default function App() {

  // State Variables
  const [filterInputValue, setFilterInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [transfers, setTransfers] = useState([])
  const [error, setError] = useState()
  const [newTransactionForm, setNewTransactionForm] = useState({description: "",
                                                                category: "",
                                                                amount: 0})
  const [isCreating, setIsCreating] = useState(false)


  


  return (
    <div className="App">

      <nav className="app">
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue}  setFilterInputValue={setFilterInputValue}/>
        
        <main>
          <Routes>
            <Route 
              path="/" element={<Home 
                transactions={transactions}
                setTransactions={setTransactions}
                transfers={transfers}
                setTransfers={setTransfers}
                setError={setError}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                filterInputValue={filterInputValue}
                setNewTransactionForm={setNewTransactionForm}
                error={error}
                newTransactionForm={newTransactionForm}
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                



              
              
              >

              </Home>}>
            </Route>


            <Route 
              path="/transactions/" element={<TransactionDetail></TransactionDetail>}>
            </Route>

          </Routes>
          </main>

        </BrowserRouter>

      </nav>
    </div>
  )
}
