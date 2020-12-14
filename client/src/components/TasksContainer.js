import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchAllTasks } from '../actions';
import Tasks from '../components/Tasks';



function TasksContainer({ tasks, loggedIn }){
    
    const dispatch = useDispatch();
    
    useEffect(() => { 

        dispatch(fetchAllTasks());
 
    },[dispatch, loggedIn]);

    return(
        <React.Fragment>
            {loggedIn ?
                <div>
                    <h1>Todas las tareas</h1>

                    {tasks && tasks.map((task, i)=>{
                    return <Tasks 
                            key={i}
                            name={task.name}
                            description={task.description}
                            status={task.status.name}
                            />
                    })}    

                </div>
            :
                <p></p>
            }     
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    tasks: state.reducers.tasks,
    loggedIn: state.reducers.loggedIn
})

export default connect(mapStateToProps, { fetchAllTasks })(TasksContainer);