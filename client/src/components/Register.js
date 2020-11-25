import React, { Component } from 'react';



class Register extends Component{
    constructor(props){
        super(props);
        this.state={
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          repeatPassword: ''
        }
    }

    handleForm = async e => {
        e.preventDefault();
        
        const cred = {
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          repeatedPassword: this.state.repeatPassword
        }
        
        const response = await fetch('/users/register',{
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
        return(

            <div className="container col-lg-4">
                <form onSubmit={this.handleForm}>

                    <div className="form-group">
                          <label htmlFor="exampleInputFirstName1">Nombre</label>
                          <input type="text" name="first_name" className="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp" value={this.state.firstName} onChange={e => this.setState({firstName: e.target.value})} />
                    </div>

                    <div className="form-group">
                          <label htmlFor="exampleInputLastName1">Apellido</label>
                          <input type="text" name="last_name" className="form-control" id="exampleInputLastName1" aria-describedby="lastNameHelp" value={this.state.lastName} onChange={e => this.setState({lastName: e.target.value})} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Contraseña</label>
                      <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputRepeatedPassword1">Repetir contraseña</label>
                      <input type="password" name="repeatedPassword" className="form-control" id="exampleInputRepeatedPassword1" value={this.state.repeatPassword} onChange={e => this.setState({repeatPassword: e.target.value})} />
                    </div>

                    <div className="form-group form-check  text-center">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label " htmlFor="exampleCheck1">Recordarme</label>
                    </div>

                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary">Registrarme</button>
                    </div>
                </form>
             </div>
        )
    }


}

export default Register;