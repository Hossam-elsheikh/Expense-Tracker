export const MainReducer = (state, action) => {
  let newExpenses;
  switch (action.type) {
    case "ADD":
      newExpenses = [...state, action.payload];
      localStorage.setItem('transactions', JSON.stringify(newExpenses))
      return newExpenses
    case 'DELETE':
        newExpenses= state.filter((e)=> action.payload !== e.id)
        localStorage.setItem('transactions', JSON.stringify(newExpenses))

        return newExpenses
    
        default: 
        return {
          state
        }
  }
};
