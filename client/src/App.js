import React, { useState, useEffect } from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import { useDispatch, connect } from 'react-redux';


import Login from './components/Login';
import Register from './components/Register';
import Tasks from './components/Tasks';


function App({ showTasks }) {


  const dispatch = useDispatch();

  useEffect(() => { 

  });


      return (
        <React.Fragment>
        <BrowserRouter>
          
          {showTasks ? 

              <div>

                <ul className="nav justify-content-center">   
                  <li className="nav-item">
                  <p className="p-2">Bienvenido</p>
                  </li>
                  <li className="nav-item">
                        <NavLink className="nav-link" to="#">Salir</NavLink>
                  </li>
                </ul> 

                <h1>BOCA LA RE CONCHA DE TU VIEJA</h1>
                <h1>BOCA LA RE CONCHA DE TU VIEJA</h1>
                <h1>BOCA LA RE CONCHA DE TU VIEJA</h1>
                <h1>BOCA LA RE CONCHA DE TU VIEJA</h1>

                {/* <Tasks /> */}

              </div>

          : 

            <div>
              <ul className="nav justify-content-center">   
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Ingresar</NavLink>
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

          }

        </BrowserRouter>
        </React.Fragment>
      );
  
}


const mapStateToProps = state => ({

  showTasks: state.loggedIn,

})



export default connect(mapStateToProps)(App);
