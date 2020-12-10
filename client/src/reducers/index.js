import counterReducer from './counterExample.js';
import loggedReducer from './isLogged.js';
import nameLoggedReducer from './nameLoggedIn'
import dataSendPut from './dataSendPut'
import allTasks from './allTasks'
import { combineReducers } from 'redux';



const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    nameLogged: nameLoggedReducer,
    dataSendPut: dataSendPut,
    allTasks: allTasks
})

export default allReducers;
