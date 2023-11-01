import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const onSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.ceil(Math.random() * 13).toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSaveHandler} />
    </div>
  );
};

export default NewExpenses;
