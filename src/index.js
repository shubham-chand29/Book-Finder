import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css";

// console.log(React); //* it is resposible for providing all inbuilt features to the component
// console.log(ReactDOM); //* ReactDOM is resposible for rendering the content into the real DOM



//? syntax : ReactDOM.createRoot(Targeted NOde)
//*This will provide the react root where all the react code will render.
//*crateRoot will act as a bridge between index.html and index.js files
//* It is a connector between index.html and index.js files.


const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);


root.render("Hello World"); // string

root.render(<h1>Hello, Learn React JS with Aman</h1>) //jsx

root.render(<App></App>)
root.render(<App/>)
