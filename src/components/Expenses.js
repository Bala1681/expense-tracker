import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'



export default function Expenses(props) {

  const[filterYear,setFilterYear]=useState('2019');

  const filterChangeHandler=(selectedYear)=>{
    
    setFilterYear(selectedYear);

  }

  return (
    <div >
      
    <div className='expenses'>
      
    <ExpensesFilter  selected={filterYear}  onChangeFilter={filterChangeHandler} ></ExpensesFilter>
    {props.item.map((expense)=>(<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))}
    
    </div>
    </div>
  )
}