import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Header extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){

    }


    render(){
        return (
            
            <ul className="nav justify-content-center">   
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Ingresar</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Registrarse</NavLink>
                </li>
            </ul>

        )
    }
}




export default Header;




