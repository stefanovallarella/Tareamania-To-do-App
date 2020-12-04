import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Tasks(){


    useEffect(() => { 
        async function fetchData() {
        // You can await here
        await fetch('/tasks/')
        .then(result => {
            let data = result.json();
            return data;
        })
        .then(data => {
            console.log(data);
      /*       {
                id: 16,
                first_name: 'stefanito',
                last_name: 'pepito',
                email: 'pepito@pepito.com',
                password: '$2a$10$ACTza3VtdHBCqDFAlEM8Qe/XpOSEKIWnwjb6dduExffA4vnB1KoHW',
                tasks: []
              } */     
        })
        .catch(err => {console.log(err);})
        // ...
        }

          fetchData();      
    });

    return(

        <h1>ACA VAN A ESTAR TODAS TUS TAREAS </h1>

    );
 

}


export default Tasks;