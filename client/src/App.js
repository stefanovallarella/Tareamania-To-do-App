import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  state = {
  };

  componentDidMount(){}


  render(){
      return (
        <React.Fragment>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Tareamania</h1>
            <hr class="my-4"></hr>
            <p class="lead">Aplicación para registrar todas tus tareas. Registrate!</p>
          </div>
        </div>

        <Login /> 

        {/* <Register />*/}

        </React.Fragment>
      );
  }
}

export default App;
