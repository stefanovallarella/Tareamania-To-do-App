import React, { useState, useEffect } from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import { useDispatch, connect } from 'react-redux';
import { updatePrueba } from './actions';

import Login from './components/Login';
import Register from './components/Register';
import TasksContainer from './components/TasksContainer';
import Header from './components/Header';



function App() {


      return (
        <React.Fragment>
        <BrowserRouter>
        <Header />

        <Route path="/login" component={ Login } />   
        <Route path="/register" component={ Register } /> 

        <TasksContainer/>
   
        </BrowserRouter>
        </React.Fragment>
      );
  
}

export default App;