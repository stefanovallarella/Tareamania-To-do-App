import counterReducer from './counterExample.js';
import loggedReducer from './isLogged.js';
import nameLoggedReducer from './nameLoggedIn'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    nameLogged: nameLoggedReducer
})

export default allReducers;
