import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions'



function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    /* const [isLoggedIn, setLoggedIn] = useState(false); */


    const dispatch = useDispatch();


    const toggleChange = async e => {
      setIsChecked(!isChecked);
    }


    const handleForm = async e => {
        e.preventDefault();
        
        const cred = {
          email: email,
          password: password,
          remember: isChecked
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
          /* setLoggedIn(true); */
          dispatch(login());
          return data;
          })
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
      }

        return(
            <div className="container col-lg-4">
                <form onSubmit={handleForm}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Contraseña</label>
                      <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group form-check text-center">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={isChecked} onChange={toggleChange}/>
                      <label className="form-check-label " htmlFor="exampleCheck1">Recordarme</label>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                    </div>
                </form>
             </div>
        )
    
}

export default Login;