import React from 'react'
import Card from '../../UI/Card'
import classes from './chart.module.css'
import { Chart } from 'primereact/chart';
import useTransactions from '../../Hooks/useTransactions';
const ExpensesChart = () => {
  const {chartData,total} = useTransactions('Expense')
  const data = chartData
const options = {
    cutout: '40%'
};
  return (
    <Card>
     <div className={classes.total}>
<h1>Expenses</h1>
<h2 style={{color: 'rgb(197, 83, 83)'}}>{total}$</h2>
</div>
      <div className={classes.chart}>
      <Chart type="doughnut" data={data} options={options}  width='12rem'/>
      </div>

    </Card>
  )
}

export default ExpensesChart