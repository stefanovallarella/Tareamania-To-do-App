import { 
    LOGGED_IN,
    LOGGED_OUT,
    GET_ALL_TASKS,
    REGISTER,
    UPDATEPRUEBA,
    GET_ALL_CATEGORIES
} from '../actions/types'

const initialState = {
    cred: {},
    loggedIn: false,
    validRegister: false,
    tasks: {},
    loading: false,
    categories: {}
};


const tareamania = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                cred: action.credenciales,
                loggedIn: action.payload
            };
        case LOGGED_OUT:
            return {
                ...state,
                loggedIn: action.payload
            };
        case REGISTER:
            return {
                ...state,
                loggedIn: action.payload,
                validRegister: action.payload
            };
        case GET_ALL_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case UPDATEPRUEBA:
            return {
                ...state,
                refresh: true
            };
        default:
            return state;
    }
}

export default tareamania;