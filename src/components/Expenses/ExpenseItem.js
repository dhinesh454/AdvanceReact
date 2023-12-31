import React,{useState}from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  

  // const [amount,setamount]=useState(props.amount);

  // function clickhandler() {

  //   console.log('clicked!!!...');
  //   setamount('$100');
  //   console.log(amount);
  // }

  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
