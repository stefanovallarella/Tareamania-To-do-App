import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../actions'



function Tasks(props){

    const hiddenId = useRef(null);

    const [id, setID] = useState(0);
    const [editOn, setEditOn] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    

    const dispatch = useDispatch();

    const handleFormEdit = async e => {
        e.preventDefault();

        let id = hiddenId.current.defaultValue;

        const credencialesEdit = {
            id,
            name,
            description,
            status
        }

        if(credencialesEdit){
            setEditOn(false)
        }

        console.log(credencialesEdit);
        dispatch(updateTask(credencialesEdit))
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
                            {editOn ?
                                <div>
                            
                                    <form onSubmit={handleFormEdit}>
                            
                                        <input type="text" defaultValue={props.name} onChange={e => setName(e.target.value)} />
                                        <input type="text" defaultValue={props.description} onChange={e => setDescription(e.target.value)} />

                                        <select class="form-control w-25" id="exampleFormControlSelect1"  value={status} onChange={ e => setStatus(e.target.value)} >
                                            <option value="" selected disabled hidden>Estado</option>
                                            <option value="1">En proceso</option>
                                            <option value="2">Terminada</option>
                                            <option value="3">A realizar</option>
                                        </select>

                                        <input type="text" hidden ref={hiddenId} defaultValue={props.id}/>
                                        {/* <input type="text" value={props.status}/> */}
                                    
                                        <button type="submit" className="btn btn-success btn-sm">EDITAR</button>
                                
                                    </form>
                                </div>
                                             
                                :

                                <div>
                                    <h3 class="card-title">{props.name}</h3>
                                    <p class="card-text">{props.description}</p>
                                    <h6>Status:</h6><small>{props.status}</small>

                                    <button type="submit" className="btn btn-success btn-sm" onClick={() => setEditOn(true)}>EDITAR</button>
                                </div>
                        }
                            {/* <form onSubmit={handleFormEdit}>
                                <input type="text" hidden value={props.id}/>
                                <button type="submit" className="btn btn-success btn-sm" onClick={() => setID(props.id)}>EDITAR</button>
                            </form> */}
                            
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


export default connect(null, { deleteTask, updateTask })(Tasks);