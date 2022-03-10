import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'

import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpenseChart from './NewExpense/ExpensesChart';




export default function Expenses(props) {

  const[filterYear,setFilterYear]=useState('2019');

  const filterChangeHandler=(selectedYear)=>{
    
    setFilterYear(selectedYear);

  }

  const filterExpenses =props.item.filter((expense)=>{
    return expense.date.getFullYear().toString() === filterYear;
  })
  
  return (
    <div >
      
    <div className='expenses'>
       

      
    <ExpensesFilter  selected={filterYear}  onChangeFilter={filterChangeHandler} ></ExpensesFilter>
    <ExpenseChart expenses={filterExpenses}/>
    <ExpensesList  item={filterExpenses}></ExpensesList>
    
    </div> 
    </div>
  )
}