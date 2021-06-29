import React, { useState } from "react";
import "./ExepenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enterdTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //       enterdTitle: event.target.value
    // })
    // setUserInput((prevState) => {
    //   return{...prevState, enteredTitle: event.target.value}
    // });
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    //   });
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExepeseData(expenseData);
    setenteredTitle("");
    setenteredDate("");
    setenteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>

        <div className="new-expense__control">
          <label>Amont</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min='0.01'
            step='0.01'
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
