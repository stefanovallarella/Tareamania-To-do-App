import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    email: '',
    password:''
  };

  componentDidMount(){

  }


  handleForm = async e => {
    e.preventDefault();

    const cred = {
      email: this.state.email,
      password: this.state.password,
    }
    
    const response = await fetch('/users/login',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cred)
    });
/*     const body = await response.text();

    this.setState({email: body}); */
  }

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

        <div className="container col-lg-4">
          <form onSubmit={this.handleForm}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
            </div>
            <div className="form-group form-check  text-center">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label " htmlFor="exampleCheck1">Recordarme</label>
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
          </form>
        </div>

        </React.Fragment>
      );
  }
}

export default App;
