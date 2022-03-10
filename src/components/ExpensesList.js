import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'


export default function ExpensesList(props) {

    if(props.item.length=== 0){
        return <h2 className='expenses-list__fallback'>Found no Expenses </h2>
    }


    
    
  return (
    <div>
        <ul className='expenses-list'>
        {props.item.map((expense)=>
        (<ExpenseItem key={expense.id} 
         title={expense.title} 
         amount={expense.amount}
          date={expense.date} />))
}

        </ul>
    
    </div>
  )
}
