import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Registration from './Component/Registration';
import reportWebVitals from './reportWebVitals';
import Login from './Component/Login';
import Formvalidation from './Component/Formvalidation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  //   {/* {<Registration />} */}
  //    {/* {<Login/>} */}
  //    {/* <Nav/> */}
  //    {/* <Formvalidation/> */}
   
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
