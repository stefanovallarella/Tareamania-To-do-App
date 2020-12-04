import React from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import { useSelector } from 'react-redux';


import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';


function App() {
  
  const isLoggedIn = useSelector(state => state.isLogged)

      return (
        <React.Fragment>
        <BrowserRouter>
          {/* <Header /> */}

          {!isLoggedIn ? 

            <ul className="nav justify-content-center">   
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Ingresar</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Registrarse</NavLink>
                </li>
            </ul>
        : 
        <ul className="nav justify-content-center">   
          <li className="nav-item">
              <span>BIENVENIDO</span>
          </li>
        </ul> 
    }
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Tareamania</h1>
            <hr class="my-4"></hr>
            <p class="lead">Aplicación para registrar todas tus tareas. Registrate!</p>
          </div>
        </div>

        

          <Route path="/login" component={ Login } />   
          <Route path="/register" component={ Register } /> 

        </BrowserRouter>
        </React.Fragment>
      );
  
}

export default App;
