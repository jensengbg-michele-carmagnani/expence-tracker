import React from 'react'
import './NewExpense.css'

import ExpenseForm from './ExenseForm'
const NewExpense = (props) => {
  const saveExepeseDataHandler = (eteredExpenseData) => { 
    const expenseData = {
      ...eteredExpenseData,
      id: Math.random().toString
    }
    props.onAddExpense(expenseData);
    console.log(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExepeseData={saveExepeseDataHandler} />
    </div>
  );
}
export default NewExpense;