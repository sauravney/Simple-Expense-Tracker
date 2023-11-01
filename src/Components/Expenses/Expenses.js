import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = (
    <h2 className="expenses-list__fallback">No Expenses Found</h2>
  );

  if (filteredExpenses.length > 0) {
    /* Dynamically rendering data out of array */
    expenseContent = filteredExpenses.map((expense) => (
      <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* Putting Conditional check : Note => IF Statement is not allowed inside curly braces we need to use ternary operator  */}
        {expenseContent}
      </Card>
    </div>
  );
}
export default Expenses;
