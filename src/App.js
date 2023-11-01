//This is App component JSX code for React
// Component is just a function decelaration of JS in which HTML is returned

import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses.js";
import NewExpenses from "./Components/NewExpenses/NewExpenses.js";

const INTIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INTIAL_EXPENSES);

  const addExpenseHandler = (Addedexpense) => {
    setExpenses((prevExpenses) => {
      return [Addedexpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

/*Your own custom Components must start with an uppercase character when you're using DOM JSX code like this, so that React is able to detect
  that this is a custom Component.Because the simple rule which React applies is that lowercase elements are built in HTML elements and
  upperCase elements are custom */

// And all our Components will be either nested inside of App JS or nested inside of our Components
// which then in turn again, are nested somewhere else.

// Ultimately with React,we build a Component Tree, you could say. You have two main app Component at the top,
// and then below that, you could have any other kinds of custom HTML elements.

/* Using Props :

Props is a super important concept because it allows you to make your components reusable, and it allows you to pass data
from another component to this component.

To pass data we use attributes in HTML or JSX code like we used in our App.js 
Those attributes properties are passed into ExpenseItem.js as a object of key-value pairs via props parameter that we used  */

// We know to pass information from parent to child we can use props but for passing information upwards ie child to parent
// We build our own attribute in parent that points to a function and that function is then passed to child through props
// And then in child we can call it by passing the info as parameter example AddExpense here is built in ExpenseForm and then passed to App.js
// THIS IS CALLED LIFTING THE STATE UP
