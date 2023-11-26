import React from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import ExpenseDate from './components/Expenses/ExpenseDate';


const App =() =>{

  const expenses=[
    {id:1,title:'Car Insurance',amount:'$294.96',date:new Date()},
    {id:2,title:'Bike',amount:'$294.96',date:new Date()},
    {id:3,title:'MobilePhones',amount:'$294.96',date:new Date()},
    {id:4,title:'Movie',amount:'$294.96',date:new Date()},
  ];





// return (

//   React.createElement('div',{className:'App'},
//   React.createElement('h1',{},'Expenses Items'),
//   React.createElement(Expenses,{items:expenses})
//   )
// )


  return (

    <div className="App">
    <h1>Expense Items</h1>

    <Expenses items={expenses}/>



      
     
    </div>
  );
}

export default App;
