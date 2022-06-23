import * as React from "react"
import "./AddTransaction.css"

export default function AddTransaction({setForm,
  form,
  isCreating,
  setIsCreating,
  handleOnSubmit
}) {

  const handleOnFormFieldChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
    console.log(form)
  }
  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm handleOnFormFieldChange={handleOnFormFieldChange} handleOnSubmit={handleOnSubmit} form={form} isCreating={isCreating} setIsCreating={setIsCreating}/>
    </div>
  )
}

export function AddTransactionForm({handleOnSubmit, form, isCreating, setIsCreating, handleOnFormFieldChange
}) {
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input 
          type="text"
          name="description"
          value={form?.description}
          onChange={handleOnFormFieldChange}
          placeholder="Enter description"/>

          
        </div>
        <div className="field">
          <label>Category</label>
          <input 
          type="text"
          name="category"
          value={form?.category}
          onChange={handleOnFormFieldChange}
          placeholder="Enter category"

          />
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input 
          type="number"
          name="amount"
          value={form?.amount}
          onChange={handleOnFormFieldChange}
          />
        </div>

        <button className="btn add-transaction" type="submit" onClick={handleOnSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}
