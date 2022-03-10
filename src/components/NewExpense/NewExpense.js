import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {

 const[isEditing, setIsEditing]=useState(false);



  const saveHandleChanger=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false)

  }
  const startEditingHandler=()=>{
    setIsEditing(true);

  }

  const stopEditingHandler=()=>{
    setIsEditing(false);
  }



  return (
    <div className='new-expense'>

      {!isEditing && <button onClick={startEditingHandler}>ADD NEW EXPENSES</button>}

      
      {isEditing && <ExpenseForm onSaveExpenseData={saveHandleChanger} onCancel={stopEditingHandler}  ></ExpenseForm>}  



    </div>
  )
}
