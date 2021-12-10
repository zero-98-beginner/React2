import React,{useCallback, useState} from "react";


import "./ExpenseForm.css";

const ExpenseForm=(props)=>{
    
const getCurrentDate = useCallback(() => new Date().toISOString().split('T')[0], [])

const [enteredTitle,setEntetredTitle] = useState('');
const [enteredAmount,setEnteredAmount] = useState('');
const [entereddate, setEnteredDate] = useState(getCurrentDate());
//const[userInput,setUserInput] =useState({
  //  entetredTitle: ' ',
    //enteredAmount: ' ',
    //enteredDate: ' '
// });


    const titleChangeHandler =(event) =>{
     setEntetredTitle(event.target.value);
     //setUserInput({
       //  ...userInput,
        // entetredTitle:event.target.value,
     //})
     //setUserInput((prevState) =>{
       //return { ...prevState ,entetredTitle:event.target.value};
     //});

    };
    const amountChangeHandler =(event) =>{
        setEnteredAmount(Number(event.target.value));
       // setUserInput({
            //...userInput,
         //   entetredAmount:event.target.value,
       // })
       };
    const dateChangeHandler =(event) =>{
        setEnteredDate(event.target.value);
      //  setUserInput({
        //    ...userInput,
          //  entetredDate:event.target.value,
        //})
       };
     const submitHandler=(event)=>{
          event.preventDefault();
        
         const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(entereddate)
        };
    props.onSaveExpenseData(expenseData);
    setEntetredTitle('');
    setEnteredDate(getCurrentDate());
    setEnteredAmount('');
     };  
       
    
    return (
         <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
             <label>Title</label>
             <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
             <div className="new-expense__control">
             <label>Amount</label>
             <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
             </div>
             <div className="new-expense__control">
             <label>Date</label>
             <input type="date" value={entereddate} onChange={dateChangeHandler} min="2021-01-01" max="2023-12-31" />
             </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
}
export default ExpenseForm;