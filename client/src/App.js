import React, { Component } from 'react';
import { Route, Router, NavLink, BrowserRouter } from "react-router-dom";


import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Prueba from './components/Prueba';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInSession: {loggedIn: false},
      updateLoggedin: false
    }
  };

  componentDidMount(){

    // Realizar Api para en funcion del middleware chequear si está logueado y mostrarle las Tareas. 

    fetch('/users/loggedin')
      .then(result => result.json())
      .then(data => {
        
      
        console.log(data.data); 
        if(data.data){
          this.setState({
            isInSession: {loggedIn: true}})
        }else{
          this.setState({
            isInSession: {loggedIn: false}})
        }

      });

  }

  componentDidUpdate(prevProps, prevState){
  }


  render(){
      return (
        <React.Fragment>
          
          {/* <Header /> */}

      
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Tareamania</h1>
            <hr class="my-4"></hr>
            <p class="lead">Aplicación para registrar todas tus tareas. Registrate!</p>
          </div>
        </div>


        <BrowserRouter>
            <ul className="nav justify-content-center">   
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Ingresar</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Registrarse</NavLink>
                </li>
            </ul>

          <Route path="/login" component={ Login } />   
          <Route path="/register" component={ Register } /> 
        </BrowserRouter>
{/* 
          <Login />

          <Register /> */}

        </React.Fragment>
      );
  }
}

export default App;
