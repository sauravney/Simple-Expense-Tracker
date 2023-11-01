//Expense Component

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react"; //We need to import useState function from react library to work with states

function ExpenseItem(props) {
  //We pass on Parameter in case of using props ie properties

  /*   return 
 If we do something like this
     <div>Date</div>
     <div>Amount</div>
     <div>Title</div>  
      
     IT WILL THROW ERROR AS IN REACT

     -You must only have,one root element here,per return statement or per JSX code snippet, you could say here we have this div,side-by-side with this div.
    Which means we have two,root elements here,in this statement.And that's simply not allowed. */

  //SIMPLE SOLN: Wrap Around A Single Div like in this case

  // const [title, setTitle] = useState(props.title); //Setting props.title to special variable

  //useState return an array of two in which 0index is for current value and 1index is a function that
  // reassigns/set the value of that special variable

  // let title = props.title;

  // const clickHandler = () => {
  // setTitle("Updated"); //Here we call that function to reassign the title value and
  // it also re-call the component function with new assigned value of title

  // title = "Updated!";
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/*In JSX Code we can put curly braces and then we put any JS expression in there like Math.random(),1+1 etc like in template literals.*/}
          {/* <h3>{1 + 4}</h3> */}
          <h2> {props.title} </h2>
          <div className="expense-item__price"> ${props.amount} </div>
          {/* To add eventlistener in react we just need to pass on attribute for event like this and define function */}
          {/* <button onClick={clickHandler}> Change Title </button> */}
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

//Note: In JSX Code though it looks similar to HTML & CSS but it's not actually it and that makes some difference,
//therefore like we use className instead of class

// useState is a so-called React hook. We'll learn about hooks later
// all these React hooks can be recognized by the fact that they start with the word "use" in their name

//For using UseState function : It must be used directly inside the component function means shouldn't be in any nested function

// If you have data, which might change, and where changes to that data should be reflected on the user interface then you need state
// because a regular variables will not do the trick with state, however you can set and change values.
// And when they do change, React will re-evaluate the component in which the state was registered.
