import React from 'react'
import './NewExpense.css'
import ExepenseForm from './NewExpense'
import ExpenseForm from './ExenseForm'
const NewExpense = () => {
  return <div className="new-expense">
    <ExpenseForm/>
  </div>
}
export default NewExpense;