import { useContext } from "react";
import { incomeCategories, expenseCategories,resetCategories } from "../Main/Categories";
import { MainContext } from "../Contexts/MainContext";


const useTransactions =(title)=>{
    resetCategories()
    const {expenses} = useContext(MainContext)
    const categories = title === 'Income' ? incomeCategories : expenseCategories
    const transactionPerType = expenses.filter((e)=> e.type === title)
    const total = transactionPerType.reduce((acc,currVal)=> acc + currVal.price,0)

    transactionPerType.forEach((t)=>{
    const category = categories.find(c=> c.type === t.category)
    if(category) category.amount += t.price
}
    )
    const filteredCategories = categories.filter(c=> c.amount > 0)

    const chartData = {
        labels: filteredCategories.map(e => e.type),
        datasets: [
            {
                data: filteredCategories.map(e=> e.amount),
                backgroundColor: filteredCategories.map((e)=> e.color),
            }
        ]
    };

    return {chartData, total}

}

export default useTransactions