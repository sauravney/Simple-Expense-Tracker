import ReactDOM from "react-dom/client";
//Importing REACT DOM

import "./index.css";
import App from "./App";
//Import App module content

const root = ReactDOM.createRoot(document.getElementById("root")); //Here we selected root
root.render(<App />); //We render App module content inside root

// It will be our so-called, root Component,
// which means it's the main Component being rendered here
