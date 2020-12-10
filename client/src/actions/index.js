export const increment = (nm) => {
    return {
        type: 'INCREMENT',
        payload: nm 
    };
};


export const decrement = () => {
    return {
        type: 'INCREMENT'
    };
};


export const login = () => {
    return {
        type: 'SIGN_IN'
    };
};

export const logout = () => {
    return {
        type: 'SIGN_OUT'
    };
};


export const namelogin = () => {
    return {
        type: 'SIGN_IN_NAME'
    };
};


export const dataEdit = (data) => {
    return {
        type: 'DATASEND',
        payload: data
    };
}


export const allTasksAction = (data) => {
    return {
        type: 'GET_ALL_TASKS',
        payload: data
    };
}


export const fetchAllTasks = () => async dispatch => {
    try{
        
        let allTasks;

        await fetch('/tasks/')
            .then(result => {
                let data = result.json();
                return data;
            })
            .then(data => {
                /* console.log(data);
                console.log(data.tasks[0]); */
                allTasks = data.tasks;
                dispatch(allTasksAction(allTasks));
            })
            .catch(err => {console.log(err);})

        
    }
    catch(e){
        dispatch(allTasksAction(console.log(e)));
    };

}
