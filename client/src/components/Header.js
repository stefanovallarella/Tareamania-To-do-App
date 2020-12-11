import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { NavLink } from "react-router-dom";


function Header() {

    useEffect(()=>{

    })

        return (
            <React.Fragment>
            
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
                </div>
             
               {/*  <div>
  
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

                </div>   */}
            
            
            </React.Fragment>
            

        )   
}



export default Header;



