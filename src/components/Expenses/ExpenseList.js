import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
  const expenses = props.items;
  const expenseItens = expenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    ></ExpenseItem>
  ));

  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenseItens}
    </Card>
  );
};

export default ExpenseList;
