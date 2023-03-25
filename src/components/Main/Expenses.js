import React, { useContext } from "react";
import Card from "../UI/Card";
import classes from "./Expenses.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign,faTrash } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../Contexts/MainContext";
const Expenses = () => {
  const { expenses,deleteExpense } = useContext(MainContext);

  return (
    <Card>
      <h1>Last Activities</h1>
      <div className={classes.expenses}>
        {expenses.map((e) => {
          return (
            <div className={classes.expense} style={e.type === 'Expense' ?{ background: 'rgb(197, 83, 83)'} : {background: 'rgb(70, 170, 100)'}}>
              <div className={classes.details} >
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size="xl"
                />
                <div>
                  <h2>{e.title}</h2>
                  <h3>{e.category}</h3>
                </div>
              </div>
              <div>
                <h4
                  className={classes.price}
                
                >
                  {e.price} $
                </h4>
              </div>
              <div style={{display:'flex', gap:'.5rem', alignItems:'center'}}>
                <h3>{e.date} </h3>
                <FontAwesomeIcon
                  icon={faTrash}
                  cursor='pointer'
                  size="l"
                  onClick={()=> {
                    const confirm = window.confirm('Are you Sure?')
                    if (confirm){
                    deleteExpense(e.id)
                    }
                    }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Expenses;
