
import React,{useState}from 'react';
import './ExpenseForm.css';


function ExpenseForm(props){

   const [enteredtitle , setEnteredTitle]=useState('');
  const [enteredamount , setEnteredAmount]=useState('');
  const [entereddate , setEnteredDate]=useState('');
  
// const [userInput , setUserInput] = useState({
//   title:'',
//   amount:'',
//   date:''
// });

  function titleOnchanged(event){
 
    setEnteredTitle(event.target.value)

    // setUserInput((prevState)=>{
    // return {...prevState,title:event.target.value}
    // })
  }
  function amountOnchanged(event){
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   amount:event.target.value})

    // setUserInput((prevState)=>{
    //   return {...prevState,amount:event.target.value}
    //   })

  }
  

  function dateOnchanged(event){

    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   date:event.target.value})

  //   setUserInput((prevState)=>{
  //     return {...prevState,date:event.target.value}
  //     })
  }

const submitHandler = (event)=>{
event.preventDefault();

let obj ={
title:enteredtitle,
amount:enteredamount,
date:new Date(entereddate)
}
console.log(obj);
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');
props.onSaveExpenseDate(obj);

}


  return <form onSubmit={submitHandler}>
  
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
      <label>Title</label>
      <input type='text'
      value={enteredtitle}
       onChange={titleOnchanged}/>
      </div>

      <div className='new-expense__control'>
      <label>Amount</label>
      <input type='number' 
      value={enteredamount}
      onChange={amountOnchanged}/>
      </div>

      <div className='new-expense__control'>
      <label>Date</label>
      <input type='date'  
      value={entereddate}
      onChange={dateOnchanged}/>
      </div>

    </div>

    <div className='new-expeses__actions'>
    <button>Add Expense</button>
    </div>
  
  
  </form>














}
export default ExpenseForm;