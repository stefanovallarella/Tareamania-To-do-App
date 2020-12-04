

const nameLoggedReducer = (state = {}, action) => {
    switch(action.type){
        case 'SIGN_IN_NAME':

            let userName;
            let userEmail;
            /* let dataSend; */

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
                 /*    dataSend = {
                        name: userName,
                        email: userEmail
                    } */
                })
                .catch(err => {console.log(err);})
                }
                  fetchData(); 
            return state = {name: userName, email: userEmail};
        default:
            return state;
    }
}

export default nameLoggedReducer;