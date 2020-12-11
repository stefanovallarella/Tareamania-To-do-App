import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';



function Tasks(props){

    
    return(
        <React.Fragment>

       <div class="card bg-light" key={props.key}>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">{props.name}</h5>
                            <p class="card-text">{props.description}</p>
                        </div>
                    </div>
        </div>
        
        </React.Fragment>

    );
 
}


export default Tasks;