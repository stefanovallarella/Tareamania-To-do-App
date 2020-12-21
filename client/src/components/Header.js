import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { logOut } from '../actions';


function Header({ loggedIn, user, loggedOut }) {

    useEffect(() => { 

        

    },[loggedIn]);

        return (
            <React.Fragment>
                {loggedIn ?

                <div>
                    <ul className="nav justify-content-center">   
                    <li className="nav-item">
                        <p className="p-2">Bienvenido - ({user.email})</p>
                    </li>
                    <li className="nav-item">
                            <NavLink className="nav-link" to="#" onClick={() => loggedOut()}>Salir</NavLink>
                    </li>
                    </ul>     
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
                </div>       
               
            }
            </React.Fragment>
        )   
}


const mapStateToProps = state => ({
    user: state.reducers.cred,
    loggedIn: state.reducers.loggedIn
})

const mapDispatchToProps = dispatch => {
    return{

        loggedOut: () => dispatch(logOut())

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Header);



