import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense =(props) =>{
    
const onSaveExpenseDataHandler=(savedExpenseData) =>{
       const expenseData = {
        ...savedExpenseData,
        id:Math.random().toString()
       };
       props.onAddExpense(expenseData);
};

    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
    );
}

export default NewExpense;