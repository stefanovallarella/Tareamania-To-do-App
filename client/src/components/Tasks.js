import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Tasks(){

    const [allTasks, setAllTasks] = useState([]);

    
    useEffect(() => { 
        
    });
    
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
          /*       {
                    id: 16,
                    first_name: 'stefanito',
                    last_name: 'pepito',
                    email: 'pepito@pepito.com',
                    password: '$2a$10$ACTza3VtdHBCqDFAlEM8Qe/XpOSEKIWnwjb6dduExffA4vnB1KoHW',
                    tasks: []
                  } */     
            })
            .catch(err => {console.log(err);})
            // ...
            }
          
            fetchData();
        /* console.log(allTasks); */

    }


    return(
        <React.Fragment>

    <h1>ACA VAN A ESTAR TODAS TUS TAREAS</h1>


            <h5 class="card-header">Tareas</h5>

            <button onClick={prueba}>ASD</button>

            {allTasks.map((task, i)=>{
            return <div class="card bg-light" key={i}>
                        <div class="card-body">
                            <h5 class="card-title">{task.name}</h5>
                            <p class="card-text">{task.description}</p>
                            <a href="#" class="btn btn-primary bg-success">Edit</a>
                            <a href="#" class="btn btn-primary bg-danger">Delete</a>
                        </div>
                    </div>
            })}


        </React.Fragment>

    );
 

}


export default Tasks;