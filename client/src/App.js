import React, { useState, useEffect } from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from './actions'
import { namelogin } from './actions';


import Login from './components/Login';
import Register from './components/Register';
import Tasks from './components/Tasks';


function App() {


  const[name, setName] = useState('');
  const[email, setEmail] = useState('');

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLogged)

  const loggedUser = useSelector(state => state.nameLogged);

  const changedUser = () => {

  setName(loggedUser.name); 
  setEmail(loggedUser.email)

}


      return (
        <React.Fragment>
        <BrowserRouter>
          
          {!isLoggedIn ? 
            <div>
              <ul className="nav justify-content-center">   
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/login" onClick={() => {dispatch(namelogin()); changedUser()}  }>Ingresar</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/register">Registrarse</NavLink>
                  </li>
              </ul>

              <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">Tareamania</h1>
                  <hr class="my-4"></hr>
                  <p class="lead">Aplicación para registrar todas tus tareas. Registrate!</p>
                </div>
              </div>

              <Route path="/login" component={ Login } />   
              <Route path="/register" component={ Register } /> 
            </div>
          : 


            <div>

              <ul className="nav justify-content-center">   
                <li className="nav-item">
                <p className="p-2">Bienvenido {name} - {email}</p>
                </li>
                <li className="nav-item">
                      <NavLink className="nav-link" to="#" onClick={e => {dispatch(logout())}}>Salir</NavLink>
                </li>
              </ul> 

              <Tasks />

            </div>


          }

        </BrowserRouter>
        </React.Fragment>
      );
  
}

export default App;
