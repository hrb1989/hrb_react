import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import TestDiv from './TestDiv'; 
// import {ClassSample, FunctionSample} from './ClassSample';
import reportWebVitals from './reportWebVitals';
import RRoute from './RRoute';
import { Provider } from 'react-redux';
import store from './store';
import ReduxApp from './ReduxApp';
// import AuthApp from './authApp';
// import AuthStatus from './authCheck';
// import { ClassComponent } from './ClassComponent';
// import ListKey from './listkey';
// import {HooksComponent, EffectApp} from './HooksComponent';
// import Chook from './Chook';
// import FocusInput from './TestRefHook';
// import StateRef from './StateRef';
// import PortalHook from './PortalHook';



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
// const classCompo = ReactDOM.createRoot(document.getElementById('classComponent'));
// classCompo.render(
//   <React.StrictMode>
//     <ClassComponent location="Madurai"/>
//   </React.StrictMode>
// );

// const listkey = ReactDOM.createRoot(document.getElementById('listkey'));
// listkey.render(
//   <React.StrictMode>
//     <ListKey />
//   </React.StrictMode>
// );

// const hooksDiv = ReactDOM.createRoot(document.getElementById('hooks'));
// hooksDiv.render(
//   <React.StrictMode>
//     <AuthStatus
//       render={(isAuth) => 
//         isAuth ? (
//           <HooksComponent />
//         ) : (
//             <p>Please SignIn</p>
//         )
//     } />
//     <EffectApp />
//   </React.StrictMode>
// );

// const chookDiv = ReactDOM.createRoot(document.getElementById('cHook'));
// chookDiv.render(
//   <React.StrictMode>
//     <Chook />
//   </React.StrictMode>
// );

// const stateRef = ReactDOM.createRoot(document.getElementById('stateRef'));
// stateRef.render(
//   <React.StrictMode>
//     <StateRef />
//   </React.StrictMode>
// );

// const portalHook = ReactDOM.createRoot(document.getElementById('stateRef'));
// portalHook.render(
//   <React.StrictMode>
//     <PortalHook />
//   </React.StrictMode>
// );

// const authCheck = ReactDOM.createRoot(document.getElementById('authCheck'));
// authCheck.render(
//   <React.StrictMode>
//     <AuthApp />
//   </React.StrictMode>
// );

// const rrouter = ReactDOM.createRoot(document.getElementById('router'));
// rrouter.render(
//   <React.StrictMode>
//     <RRoute />
//   </React.StrictMode>
// );

const reduxDiv = ReactDOM.createRoot(document.getElementById('reduxDiv'));
reduxDiv.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
