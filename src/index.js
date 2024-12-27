import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestDiv from './TestDiv'; 
import {ClassSample, FunctionSample} from './ClassSample';
import reportWebVitals from './reportWebVitals';
import { ClassComponent } from './ClassComponent';


// document.getElementById('eventDiv').innerHTML = message; //JS
// let eventDiv = document.getElementById('eventDiv') //JS
// eventDiv.innerHTML = message; //JS

// const eventDiv = document.getElementById('eventDiv') //JS
// const root = ReactDOM.createRoot(document.getElementById('root'));
// // eventDiv.innerHTML = message; //JS
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const test = ReactDOM.createRoot(document.getElementById('testDiv'));
// test.render(
//   <React.StrictMode>
//     <TestDiv />
//   </React.StrictMode>
// );

// // here name="HRB" is a props
// const classDiv = ReactDOM.createRoot(document.getElementById('ClassDiv'));
// classDiv.render(
//   <React.StrictMode>
//     <ClassSample />
//     <FunctionSample name="HRB"/>
//   </React.StrictMode>
// );

// JS
// let cont;
// let num1 = 100;
// let num2 = 200;
// if (num1 > num2) {
//   cont = "num1 is greater";
// } else {
//   cont = "num2 is greater";
// }

// let x = 10;
// const cont1 = "Welcome to Fractal AI";
// let cont2 = cont1; 
// for(let i=0;i<x;i++){
//   cont2 += cont2;
// }

// // JSX
// const content = (
//   <>
//   <div>
//       <h1 className='hrbClass'>Fractal AI</h1>
//       {cont2}
//     </div>
//     <div>
//     <h1>Fractal AI</h1>
//     { 2+2 }
//   </div>
//   </>
// )

// react
// test.render(
//     content
// );


// Here Location is a props
const classCompo = ReactDOM.createRoot(document.getElementById('classComponent'));
classCompo.render(
  <React.StrictMode>
    <ClassComponent location="Madurai"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
