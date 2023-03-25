import React from 'react'
import Card from '../../UI/Card'
import classes from './chart.module.css'
import { Chart } from 'primereact/chart';
import useTransactions from '../../Hooks/useTransactions';
const IncomeChart = () => {
  const {chartData,total} = useTransactions('Income')
  const data = chartData
const options = {
    cutout: '40%'
};
  return (
    <Card>
    <div className={classes.total}>

      <h1>Incomes</h1>
      <h2 style={{color: 'rgb(70, 170, 100)'}}>{total}$</h2>
    </div>
      <div className={classes.chart}>

      <Chart type="doughnut" data={data} options={options} width='12rem'/>
      </div>
    </Card>
  )
}

export default IncomeChart