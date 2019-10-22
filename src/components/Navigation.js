import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Example = (props) => {
  return (
    <div>
      <Nav>
        <NavLink exact to="/register">Register</NavLink> 
        <NavLink exact to="/">Home</NavLink> 
        {/* <NavLink to="#">Projects</NavLink>  */}
        {/* <NavLink to="#">Contact</NavLink> */}
        <NavLink exact to="/projectform">Create Project</NavLink>
      </Nav>   
    </div>
  )
}

export default Example;