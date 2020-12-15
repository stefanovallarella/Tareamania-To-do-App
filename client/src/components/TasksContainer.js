import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchAllTasks, fetchAllCategories } from '../actions';


import Tasks from '../components/Tasks';
import TaskCreate from '../components/TaskCreate';



function TasksContainer({ tasks, loggedIn, allCategories }){
    
    const dispatch = useDispatch();
    
    useEffect(() => { 

        dispatch(fetchAllTasks());
        dispatch(fetchAllCategories());
    },[dispatch, loggedIn]);

    return(
        <React.Fragment>
            {loggedIn ?

                <div>
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

                    <TaskCreate categories={allCategories}/> 
                </div>

            :
                <p> </p>
            }     
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    tasks: state.reducers.tasks,
    loggedIn: state.reducers.loggedIn,
    allCategories: state.reducers.categories
})

export default connect(mapStateToProps, { fetchAllTasks, fetchAllCategories })(TasksContainer);