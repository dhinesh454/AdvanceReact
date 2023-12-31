import React,{useState} from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import ExpenseDate from './components/Expenses/ExpenseDate';
import NewExpense from './components/NewExpense/NewExpenses'


const DUMMY_EXPENSES=[
  {id:'e1',title:'Car Insurance',amount:294.23,date:new Date(2022, 7 ,14)},
  {id:'e2',title:'Bike',amount:108.5,date:new Date(2023, 2, 28)},
  {id:'e3',title:'MobilePhones',amount:23.65,date:new Date(2020, 11, 23)},
  {id:'e4',title:'Movie',amount:33.33,date:new Date(2020,10,14)},
];


const App =() =>{



 

  const[expenses,setExpenses]= useState(DUMMY_EXPENSES)

const addExpenseHandler = (expense) =>{
   
  // setExpenses([expense,...expenses]); //expense from parameters dont manipulate

  setExpenses(prevExpense =>{
    return [expense,...prevExpense]
  });

  console.log(expense)
}


// return (

//   React.createElement('div',{className:'App'},
//   React.createElement('h1',{},'Expenses Items'),
//   React.createElement(Expenses,{items:expenses})
//   )
// )


  return (

    <div className="App">
    <h1>Expense Items</h1>
   <NewExpense  onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/> 
    </div>
  );
}

export default App;
