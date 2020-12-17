import { 
    LOGGED_IN,
    LOGGED_OUT,
    GET_ALL_TASKS,
    REGISTER,
    UPDATEPRUEBA,
    GET_ALL_CATEGORIES,
    CREATE_TASK
} from './types'



/* 
const nameLoggedReducer = (state = {}, action) => {
    switch(action.type){
        case 'SIGN_IN_NAME':

            let userName;
            let userEmail;
            

            async function fetchData() {
                await fetch('/users/loggedin')
                .then(result => {
                    let data = result.json();
                    return data;
                })
                .then(data => {
                    console.log(data);
                    const user = data.data;
                    userName = user.userInSession.first_name + ' ' + user.userInSession.last_name;
                    userEmail = user.userInSession.email;  
                })
                .catch(err => {console.log(err);})
                }
                  fetchData(); 
            return state = {name: userName, email: userEmail};
        default:
            return state;
    }
}

export default nameLoggedReducer; */



export const isLoggedIn = (cred) => async dispatch => {

    try{

        let logIn;
        let credenciales = cred;

        await fetch('/users/login',{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cred)
          })
          .then(response => {
            console.log("Success: ", response);
            const data = response.json();
            return data;
            })
          .then(data => {
            if(data.alreadyLoggedin){
            logIn = data.alreadyLoggedin;
            }else{
            logIn = data.successLogin;
            }
          })
          .catch((error) => {
          console.error('Error:', error);
          });

          dispatch({
            type: LOGGED_IN,
            payload: logIn,
            credenciales: credenciales 
          })
          console.log(logIn);
    }
    catch(e){
        dispatch( {
            type: LOGGED_IN,
            payload: console.log(e),
        })
    }

}








export const registerCheck = (cred) => async dispatch => {
    
    try{
        
        let registerValid;
        
        await fetch('/users/register',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cred)
        })   
        .then(response => {
            console.log("Success: ", response);
            const data = response.json();
            return data;
        })
          .then(data => {
              
            registerValid = data.validEmail; 
              
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
            dispatch({
                type: REGISTER,
                payload: registerValid
            })
            
        }
        catch(e){
            dispatch( {
                type: REGISTER,
                payload: console.log(e),
            })
    }
    
}



export const fetchAllTasks = () => async dispatch => {
    try{
        
        let allTasks;

        await fetch('/tasks/')
            .then(result => result.json())
            .then(tasks => {

                allTasks = tasks.data;
                console.log(tasks);
            })
            .catch(err => {console.log(err)})

        dispatch({
            type: GET_ALL_TASKS,
            payload: allTasks
        })
    }
    catch(e){
        dispatch(console.log(e));
    };

}



export const logOut = () => async dispatch => {

    try{
        
        let loggedOut;

        await fetch('/users/logout')
            .then(result => result.json())
            .then(logout => {
                loggedOut = !logout;
            })
            .catch(err => {console.log(err)})

        dispatch({
            type: LOGGED_OUT,
            payload: loggedOut
        })
    }
    catch(e){
        dispatch(console.log(e));
    };

};



export const fetchAllCategories = () => async dispatch => {
    try{
        
        let allCategories;

        await fetch('/tasks/categories')
        .then(result => result.json())
        .then(categories => {

            console.log(categories);
            allCategories = categories.data;
        })
        .catch(err => {console.log(err)})

        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: allCategories
        })
    }
    catch(e){
        dispatch(console.log(e));
    };

}


export const createTask = (cred) => async dispatch => {
    
    try{
        
        let taskCreated;
        cred.status = 1;
        console.log(cred);

        await fetch('/tasks/create',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cred)
        })   
        .then(response => {
            console.log("Success: ", response);
            const data = response.json();
            return data;
        })
          .then(data => {

            taskCreated = true;

            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
            dispatch({
                type: CREATE_TASK,
                payload: taskCreated
            })   
        }
        catch(e){
            dispatch( {
                type: CREATE_TASK,
                payload: console.log(e),
            }) 
    }
    
}







export const updatePrueba = () => dispatch => {
    dispatch({
        type: UPDATEPRUEBA
    });
};