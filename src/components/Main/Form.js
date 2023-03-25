import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import { MainContext } from "../Contexts/MainContext";
import { incomeCategories, expenseCategories } from "./Categories";
import classes from "./Form.module.css";
const Form = () => {
  const { addExpense,totalBalance} = useContext(MainContext);
  const [formData, setFormData] = useState({
    type: "Expense",
    category: '',
    title: "",
    price: 0,
    date: new Date(),
    details: "",
  });

  const categories = formData.type === 'Expense' ? expenseCategories : incomeCategories;
  let defineColor;
  for (let i = 0; i<categories.length;i++){
    if (categories[i].type === formData.category){
      defineColor = categories[i].color
    }
  }
  const submitHandler = (event) => {
    addExpense({ id: Math.round(Math.random() * 213), categoryColor: defineColor, ...formData });
    
    setFormData({
      ...formData,
      title: "",
      price: 0,
      date: new Date(),
      details: "",
    });
    event.preventDefault();
  };

  
  return (
    <Card>
      <div className={classes.total}>
        <h2>Your Total Balance is </h2>
        <h2>{totalBalance}$</h2>
      </div>
      <h1>Create a new Expense</h1>
      <form
        className={classes.form}
        onSubmit={submitHandler}
        
      >
        <div className={classes.field}>
          <label htmlFor="dir">Select Field</label>
          <select
            required
            id="dir"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option>Expense</option>
            <option>Income</option>
          </select>
        </div>
        <div className={classes.field}>
          <label htmlFor="category">Select Category</label>
          <select
            required
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
          <option disabled>Select Category</option>
            {categories.map((e) => (
              <option key={e.type}>{e.type}</option>
            ))}
          </select>
        </div>
        <div className={classes.field}>
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            id="title"
            placeholder="Write a title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="price">Price</label>
          <input
            required
            type="number"
            id="price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: Number(e.target.value) })
            }
          />
        </div>

        <div className={classes.field}>
          <label htmlFor="date">Date</label>
          <input
            required
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        

        <button type="submit">Add +</button>
       
      
      </form>
    </Card>
  );
};

export default Form;
