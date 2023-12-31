import React  from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

function NewExpenses(props){
    const saveExpenseDataHandler = (enteredExpenseItem) =>{
        let count=1;
        const expenseDate ={
           ...enteredExpenseItem,
           id:Math.random().toString()
        };
     
        console.log(expenseDate)
         props.onAddExpense(expenseDate); 
    }



    return(
        <div className='new-expense'>
        <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
        </div>
    ) 
}


export default NewExpenses;