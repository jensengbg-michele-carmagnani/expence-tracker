import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const saveExepeseDataHandler = (eteredExpenseData) => {
    const expenseData = {
      ...eteredExpenseData,
      id: Math.random().toString,
    };
    setIsOpenForm(false);
    
    props.onAddExpense(expenseData);
    console.log("NewExpense.js", expenseData);
  };
  const ShowFormHandler = () => {
    setIsOpenForm(true);
  };
  const HideFormhandler = () => {
    setIsOpenForm(false);
  };
  return (
    <div className="new-expense">
      {!isOpenForm && <button onClick={ShowFormHandler}>Add Expense</button>}
      {isOpenForm && (
        <ExpenseForm
          onSaveExepeseData={saveExepeseDataHandler}
          onCancel={HideFormhandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
