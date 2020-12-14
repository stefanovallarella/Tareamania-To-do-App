import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';



function Tasks(props){

    
    return(
        <React.Fragment>

       <div class="card bg-light" key={props.key}>
                    <div class="card-body">
                        <div>
                            <h3 class="card-title">{props.name}</h3>
                            <p class="card-text">{props.description}</p>
                            <h6>Status:</h6><small>{props.status}</small>
                        </div>
                    </div>
        </div>

        </React.Fragment>

    );
 
}


export default Tasks;