import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  };

  componentDidMount(){

    // Realizar Api para en funcion del middleware chequear si está logueado y mostrarle las Tareas. 



  }


  render(){
      return (
        <React.Fragment>




        <Header />

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Tareamania</h1>
            <hr class="my-4"></hr>
            <p class="lead">Aplicación para registrar todas tus tareas. Registrate!</p>
          </div>
        </div>

      
          <Route path="/login" component={ Login } />   
          <Route path="/register" component={ Register } />
    
        {/*  <Login />  

         <Register /> */}

        </React.Fragment>
      );
  }
}

export default App;
