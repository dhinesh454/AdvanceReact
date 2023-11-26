
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'; 
import Card from '../UI/Card';


const ExpenseItem = (props) => {
    // <div>{props.date.toLocaleString('en-US',{weekday:'long',month:'long',year:'numeric',day:'numeric'})}</div>
    
    function onChange(){
        console.log('clicked!!!!...')
    }
   
    return (


<Card className='expense-item'>
<ExpenseDate date={props.date}/>
<div className='expense-item__description'>
<h2>{props.title}</h2>
<div className='expense-item__price'>{props.amount}</div>
<button onClick={onChange}>ChangeTitle</button>
</div>


</Card>






    );
}









// function ExpenseItem () {
  

//     function showExpense(){
//         const show = document.getElementById('formid');
//     if (show) {
//         console.log('active')
  
//       show.style.display = 'grid'; // or 'none' if you prefer
//     }
//     }

    

//     return (
// <div>
// <h1>ExpenseItem</h1>

// <div className='container'>
//  <div className="form" id="formid" >
// <div className='mb-3'>
// <label className='form-label'>ItemName</label>
// <input className='form-control form-control-sm' type="text" name="expenseitem" id="itemid"></input>
// </div>

// <div className='mb-3'>
// <label className='form-label'>Description</label>
// <input className='form-control form-control-sm' type="text" name="description" id="descid"></input>
// </div>

// <div className='mb-3'>
// <label className='form-label'>Amount</label>
// <input className='form-control form-control-sm' type="number" name="amount" id="amountid"></input>
// </div>

// <button type="submit" className="btn btn-primary" >Submit</button>
// </div>

// <button onClick={showExpense} className="btn btn-dark">Show Expense</button>*/


// <table>
//         <tr>
//         <th>Name</th>
//         <th>Amount</th>
        
//         </tr>
        
//         <tr>
//              <td>Food</td>
//              <td>Rs 10</td>
//         </tr>
        
//         <tr>
//              <td>Petrol</td>
//              <td>Rs 100</td>
//         </tr>

//         <tr>
//              <td>Movies</td>
//              <td>Rs 200</td>
//         </tr>
        
        
        
//         </table>
// </div>




// </div>

//     );
// }




export default ExpenseItem;