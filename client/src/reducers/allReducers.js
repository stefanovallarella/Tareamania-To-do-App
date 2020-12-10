import { 
    LOGGED_IN,
    LOGGED_OUT,
    GET_ALL_TASKS,
    REGISTER,
    UPDATEPRUEBA
} from '../actions/types'


const initialState = {
    cred: {},
    loggedIn: false,
    validRegister: false,
    tasks: {},
    loading: false,
    refresh: false
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
            return state;
        case REGISTER:
            return {
                ...state,
                validRegister: true
            };
        case GET_ALL_TASKS:
            return state;
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