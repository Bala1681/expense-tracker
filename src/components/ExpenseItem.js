import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React from 'react'




export default function ExpenseItem(props) {

  // const [title,setTitle]=useState(props.title);
  
  // // const clickHandler=()=>{
  // //   setTitle("bala");
  // //   console.log(title);
  // // }


    
  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}/>
       
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
       </div>
       <div className='expense-item__price'>${props.amount}</div>

       {/* <button onClick={clickHandler}>CLICk</button> */}





    </div>
  )
}
