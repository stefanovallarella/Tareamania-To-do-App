import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchAllTasks } from '../actions';


function Tasks({ tasks }){

    const dispatch = useDispatch();

    useEffect(() => { 
        
        dispatch(fetchAllTasks());

    },[dispatch]);
    

    return(
        <React.Fragment>


            <h5 class="card-header">Tareas</h5>


            {tasks.map((task, i)=>{

            return <div class="card bg-light" key={i}>
                        <div class="card-body">
                            <div>
                                <h5 class="card-title">{task.name}</h5>
                                <p class="card-text">{task.description}</p>
                            </div>
                        </div>
                    </div>



                       {/*  {!edit ?

                            <React.Fragment>
                            <h5 class="card-title">{task.name}</h5>
                            <p class="card-text">{task.description}</p>
                            <button onClick={editOnOff} type="submit" className="btn btn-primary bg-success">Edit</button>
                            <button onClick={() => setData({dataName: task.name, dataDescription: task.description})} type="submit" className="btn btn-primary bg-success">Envio data</button>
   
                            <form method="POST" action="/tasks/delete?_method=DELETE">
                            <button type="submit" className="btn btn-primary bg-danger">Delete</button>
                            </form>
                            </React.Fragment>

                            :

                            <React.Fragment>

                            <form onSubmit={handleForm} action={`/tasks/edit/${task.id}_method=PUT`} method="POST" enctype="multipart/form-data">
                                <input class="card-title" value={task.name} onChange={e => setTitle(e.target.value)}/>
                                <input class="card-text" value={task.description} onChange={e => setDescription(e.target.value)}/>
                                <button onClick={e => setTaskId(task.id)} className="btn btn-primary bg-success">Editar</button>
                                <button onClick={editOnOff} type="submit" className="btn btn-primary bg-success">Aceptar</button>
                            </form>

                            <form method="POST" action="/tasks/delete?_method=DELETE">
                            <button type="submit" className="btn btn-primary bg-danger">Delete</button>
                            </form>
                            </React.Fragment>
                                
                        } */}
            })}


        </React.Fragment>

    );
 
}


const mapStateToProps = state => ({

    tasks: state.allTasks

})


export default connect(mapStateToProps, { fetchAllTasks })(Tasks);