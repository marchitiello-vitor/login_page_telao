import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login/login.jsx'
import reportWebVitals from './reportWebVitals';
import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth'

// const PermimssaoComum = ({component: Component}) => (
//   <Route
//     render={(props) =>
//       usuarioAutenticado() && parseJwt().role === '2' ? (
//         <Component {...props} />
//       ) : (
//         <redirect to="" />
//       )
//     }
//   />
// )
 
const routing = (

  <BrowserRouter>
    <div>
      <Routes>
        <Route index element={<Login/>} />
        {/* <Route path="/Login" element={<Login />}></Route> */}
      </Routes>
    </div>
  </BrowserRouter>
)

ReactDOM.render( routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
