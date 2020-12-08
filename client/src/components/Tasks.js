import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Tasks(){

    const [allTasks, setAllTasks] = useState([]);
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskId, setTaskId] = useState('');

    
    useEffect(() => { 
        
        
    });
    
    const editOnOff = async e => {
        e.preventDefault();
        setEdit(!edit);

    }


    const handleForm = async e => {
        e.preventDefault();
        
        const cred = {
          title: title,
          description: description
        }
        
        await fetch('/tasks/edit/' + taskId,{
            method: 'PUT',
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


    const prueba = async e => {
        e.preventDefault();

        async function fetchData() {
            // You can await here
            await fetch('/tasks/')
            .then(result => {
                let data = result.json();
                return data;
            })
            .then(data => {
                console.log(data);
                console.log(data.tasks[0]);
                setAllTasks(data.tasks);
            })
            .catch(err => {console.log(err);})
            // ...
            }
          
            fetchData();

    }


    return(
        <React.Fragment>

    <h1>ACA VAN A ESTAR TODAS TUS TAREAS</h1>


            <h5 class="card-header">Tareas</h5>

            <button onClick={prueba}>ASD</button>

            {allTasks.map((task, i)=>{
            return <div class="card bg-light" key={i}>
                        <div class="card-body">

                        {!edit ?

                            <React.Fragment>
                            <h5 class="card-title">{task.name}</h5>
                            <p class="card-text">{task.description}</p>
                            <button onClick={editOnOff} type="submit" className="btn btn-primary bg-success">Edit</button>

                            {/* VER RUTAS */}
                            

                            <form method="POST" action="/tasks/delete?_method=DELETE">
                            <button type="submit" className="btn btn-primary bg-danger">Delete</button>
                            </form>
                            </React.Fragment>

                            :

                            <React.Fragment>

                            <form onSubmit={handleForm} action={`/tasks/edit/${task.id}_method=PUT`} method="POST" enctype="multipart/form-data">
                                <input class="card-title" value={task.name} onChange={e => setTitle(e.target.value)}/>
                                <input class="card-text" value={task.description} onChange={e => setDescription(e.target.value)}/>
                                <button onClick={e => setTaskId(task.id)} type="submit" className="btn btn-primary bg-success">Editar</button>
                                <button onClick={editOnOff}  className="btn btn-primary bg-success">Aceptar</button>
                            </form>

                            <form method="POST" action="/tasks/delete?_method=DELETE">
                            <button type="submit" className="btn btn-primary bg-danger">Delete</button>
                            </form>
                            </React.Fragment>
                                
                        }
                             
                        </div>
                    </div>
            })}


        </React.Fragment>

    );
 

}


export default Tasks;