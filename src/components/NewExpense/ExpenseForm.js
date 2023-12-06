
import React,{useState}from 'react';
import './ExpenseForm.css';


function ExpenseForm(){

  const [title , setEnteredTitle]=useState('');
  const [amount , setEnteredAmount]=useState('');
  const [date , setEnteredDate]=useState('');
  

  function titleOnchanged(event){
     setEnteredTitle(event.target.value);
  }

  function amountOnchanged(event){
    setEnteredAmount(event.target.value);
  }
  

  function dateOnchanged(event){
    setEnteredDate(event.target.value)
  }
  return <form>
  
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
      <label>Title</label>
      <input type='text' onChange={titleOnchanged}/>
      </div>

      <div className='new-expense__control'>
      <label>Amount</label>
      <input type='number' onChange={amountOnchanged}/>
      </div>

      <div className='new-expense__control'>
      <label>Date</label>
      <input type='date'  onChange={dateOnchanged}/>
      </div>

    </div>

    <div className='new-expeses__actions'>
    <button>Add Expense</button>
    </div>
  
  
  </form>














    // return(
    //     <div className='container'>
    //     <div className='form' id='formid'>
        
    //     <div className='mb-3'>
    //     <label className='form-label'>Expense Title</label>
    //     <input className='form-control' type='text' name='expensetitle' id='titleid' placeholder='Enter the Title'></input>
    //     </div>

    //     <div className='mb-3'>
    //     <label className='form-label'>Expense Amount</label>
    //     <input className='form-control' type='number' name='expenseamount' id='amountid' placeholder='Enter the Amount'></input>
    //     </div>

     
    //     <div className='mb-3'>
    //     <label className='form-label'>Expense Date</label>
    //     <input className='form-control' type='date' name='expensedate' id='dateid' placeholder='Enter the Date'></input>
    //     </div>

    //     <div typeof='submit' className='btn btn-primary'>Submit</div>   

    //     </div>

    //     <button className='btn btn-dark' onClick={showExpense}>Show Expenses</button>
        
        
        
        
    //     </div>
    // )
}

export default ExpenseForm;