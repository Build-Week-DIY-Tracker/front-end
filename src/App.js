import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Navigation from './components/Navigation';
import ProjectForm from './components/ProjectForm';
import EditProject from './components/EditProject';
import Projects from './components/Projects';
import PrivateRoute from './components/PrivateRoute'
import { Route } from "react-router-dom";

function App() {

  const [projects, setProjects] = useState([])

  const addNewProject = project => {
    setProjects([...projects, project])
  }

  return (
    <div className="App">
      {/* <Route path = "/register" component = {UserForm} /> */}
      <div className = "navContainer"> <Navigation /></div>
      <Route path = "/register" component = {Register} />
      <Route exact path = "/" component = {Login} />
      <PrivateRoute
        exact
        path = "/projectform"
        component = {ProjectForm}
      />
      <PrivateRoute
        exact
        path = "/projects"
        component = {Projects}
      />
      <Route exact path='/projects/edit/:id' component={EditProject} />
    </div>
  );
}

export default App;
