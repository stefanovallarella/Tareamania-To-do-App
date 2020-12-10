import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { isLoggedIn, updatePrueba } from '../actions';


function Login({ checklogin }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
  
    const dispatch = useDispatch();

    useEffect(()=>{

    });


    const toggleChange = async e => {
      setIsChecked(!isChecked);
    }


    const handleForm = async e => {
        e.preventDefault();
        
        const credenciales = {
          email: email,
          password: password,
          remember: isChecked
        }

        checklogin(credenciales);

      }

        return(
            <React.Fragment>
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
             </React.Fragment>
        )
    
      }
/* 
      const mapStateToProps = state => ({

        showTasks: state.loggedIn,
        update: state.refresh

      });
 */

      const mapDispatchToProps = (dispatch) => {
        return{

          checklogin: (cred) => dispatch(isLoggedIn(cred))

        }
      }
    

export default connect(null, mapDispatchToProps)(Login);