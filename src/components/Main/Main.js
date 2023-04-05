import React, { useContext } from "react";
import Container from "../UI/Container";
import ExpensesChart from "./Charts/ExpensesChart";
import IncomeChart from "./Charts/IncomeChart";
import Expenses from "./Expenses";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { MainContext } from "../Contexts/MainContext";
import classes from "./Main.module.css";
const Main = () => {
  const { expenses } = useContext(MainContext);
  return (
    <div className={classes.main}>
<h1 style={{marginTop: '1rem', color: 'white'}}>Expenses Tracker</h1>
  
    <Container>
      <Form />
      {expenses.length > 0 && <Expenses />}
      {expenses.length > 0 ? (
        <div className={classes.charts}>
          <ExpensesChart />
          <IncomeChart />
        </div>
      ) : (
        <div className={classes.empty}>
          <h1>Try Adding Some Data!!</h1>
          <FontAwesomeIcon icon={faPen} size="xxl" />
        </div>
      )}
    </Container>
    <div style={{display: 'flex', gap:'1rem',alignItems:'center'}}>
    <p style={{color:'white'}}>Created By Hossam Elsheikh </p>

    <a style={{color:'white', textDecoration:'none'}} href="https://github.com/Hossam-elsheikh" target='_blank'> 
    <FontAwesomeIcon icon={faGithub}/>
     </a>
     <a style={{color:'white', textDecoration:'none'}} href="https://www.linkedin.com/in/hossam-elsheikh-5459a1166/" target='_blank'> 
    <FontAwesomeIcon icon={faLinkedin}/>
     </a>
    </div>
    
    </div>
  );
};

export default Main;
