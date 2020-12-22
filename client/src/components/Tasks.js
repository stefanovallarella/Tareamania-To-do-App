import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { deleteTask } from '../actions'



function Tasks(props){


    const [id, setID] = useState(0);

    const dispatch = useDispatch();

    const handleFormEdit = async e => {

    }

    const handleFormDelete= async e => {
        e.preventDefault();
        console.log(id);
       
        const credenciales = {id};
        dispatch(deleteTask(credenciales))
    }
    
    return(
        <React.Fragment>

       <div class="card bg-light" key={props.key}>
                    <div class="card-body">
                        <div>
                            <h3 class="card-title">{props.name}</h3>
                            <p class="card-text">{props.description}</p>
                            <h6>Status:</h6><small>{props.status}</small>

                            <form onSubmit={handleFormEdit}>
                                <input type="text" hidden value={props.id}/>
                                <button type="submit" className="btn btn-success btn-sm">EDITAR</button>
                            </form>
                            
                            <form onSubmit={handleFormDelete}>
                                <input type="text" hidden value={props.id} />
                                <button type="submit" className="btn btn-danger btn-sm" onClick={() => setID(props.id)}>BORRAR</button>
                            </form>

                        </div>
                    </div>
        </div>

        </React.Fragment>

    );
 
}


export default connect(null, { deleteTask })(Tasks);