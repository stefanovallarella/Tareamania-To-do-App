import React, { Component } from 'react';



class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
            isChecked: false
        }
    }

    toggleChange = async e => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }


    handleForm = async e => {
        e.preventDefault();
        
        const cred = {
          email: this.state.email,
          password: this.state.password,
          remember: this.state.isChecked
        }
        
        await fetch('/users/login',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cred)
        })
        .then(response => {
          console.log("Success: ", response);
          const data = response.json();
          return data;
          })
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
      }




    render(){
        return(

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
                    <div className="form-group form-check text-center">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={this.state.isChecked} onChange={this.toggleChange}/>
                      <label className="form-check-label " htmlFor="exampleCheck1">Recordarme</label>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                    </div>
                </form>
             </div>


        )
    }


}

export default Login;