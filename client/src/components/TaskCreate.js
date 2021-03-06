import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createTask } from '../actions';



function TaskCreate(props){

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskCategory, setTaskCategory] = useState('');

    const dispatch = useDispatch();
    
    useEffect(()=> {

    })


    const handleForm = async e => {
        e.preventDefault();
        
        const category = (category) => {
            if(category === 'Facultad'){
                return 1;
            }else if(category === 'Varios'){
                return 2;
            }
        } 

        const credenciales = {
            name: taskName,
            description: taskDescription,
            category: category(taskCategory)
        }
        
        dispatch(createTask(credenciales))
        
      }




    return(
        <React.Fragment>

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    CREAR TAREA
                </button>


                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nueva Tarea</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        
                    <div className="container col-lg-4">
                            <form onSubmit={handleForm}>

                                <div className="form-group">
                                    <label htmlFor="taskName">Nombre:</label>
                                    <input type="text" name="name" className="form-control" id="taskName" value={taskName} onChange={e => setTaskName(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="taskDescription">Descripción:</label>
                                    <input type="text" name="description" className="form-control" id="taskDescription" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Categoría</label>
                                    <select name="category" class="form-control" id="exampleFormControlSelect1" value={taskCategory} onChange={ e => setTaskCategory(e.target.value)}>
                                        <option value="" selected disabled hidden>Elegir</option>
                                         {props.categories.map((category)=>{
                                            return <option value={`${category.name}`}>{category.name}</option>
                                        })} 
                                    </select>
                                </div>

                                <div className="row justify-content-center">
                                    <button type="submit" className="btn btn-primary">Crear Tarea</button>
                                </div>

                            </form>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
                </div>



        </React.Fragment>

    );
 
}



const mapDispatchToProps = dispatch => {
    return {
        createNewTask: (cred) => dispatch(createTask(cred))
    }
}
 

export default connect(null, { createTask })(TaskCreate);








