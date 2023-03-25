import React,{ createContext, useReducer} from 'react'
import { MainReducer } from './contextReducer'
const initialState= JSON.parse(localStorage.getItem('transactions') ) || []

export const MainContext = createContext(initialState)
const ContextProvider = ({children}) => {
const [expenses, dispatch]=useReducer(MainReducer, initialState)

const addExpense =(expense)=>{
    dispatch({type:'ADD',payload: expense})
}
const deleteExpense =(id)=>{
    dispatch({type:'DELETE',payload: id})
}
const totalBalance = expenses.reduce((acc,val)=>{
  return(val.type === 'Expense' ? acc - val.price : acc + val.price )
},0)
const MainCtx={
    expenses: expenses,
    addExpense,
    deleteExpense,
    totalBalance
}

  return (
    <MainContext.Provider value={MainCtx}>{children}</MainContext.Provider>
  )
}

export default ContextProvider;