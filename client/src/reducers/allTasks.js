const initialTasks = {};

const allTasks = (state = initialTasks, action) => {
    switch(action.type){
        case 'GET_ALL_TASKS':
            return state = action.payload;
        default:
            return state;
    }
}

export default allTasks;