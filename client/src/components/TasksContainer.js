import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchAllTasks } from '../actions';
import Tasks from '../components/Tasks';



function TasksContainer({ tasks, loggedIn }){
    


    const dispatch = useDispatch();
    
    useEffect(() => { 

        console.log(loggedIn);

    },[loggedIn]);

    return(
        <React.Fragment>
        {loggedIn ?
            <p>Logueado</p>
        :
            <p> No logueado</p>
        }     
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    tasks: state.allTasks,
    loggedIn: state.loggedIn,
})

export default connect(mapStateToProps, { fetchAllTasks })(TasksContainer);