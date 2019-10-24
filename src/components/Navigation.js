import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLinkText } from '../actions';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Example = (props) => {

  useEffect(() => {
    console.log('useEffect')
  }, [props.linktext])

  const handleLogout = e => {
    if(localStorage.getItem('token')) {
      localStorage.removeItem('token')
      props.setLinkText('...')
    }
  }

  return (
    <div>
      <h1>DIY Tracker</h1>
      <Nav>
        <NavLink exact to="/register">Register</NavLink> 
        <NavLink onClick={handleLogout} exact to="/">{localStorage.getItem('token') ? 'Logout' : 'Home'}</NavLink> 
        <NavLink to="/projects">Projects</NavLink> 
        {/* <NavLink to="#">Contact</NavLink> */}
        <NavLink exact to="/projectform">Create Project</NavLink>
      </Nav>   
    </div>
  )
}

const mapStateToProps = state => {
  return {
    linktext: state.linktext,
  }
}

export default connect(mapStateToProps, { setLinkText })(Example);