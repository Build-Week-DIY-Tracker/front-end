import React from 'react';
import './App.css';
import UserForm from "./components/Register";
import RegisterTest from './components/RegisterTest';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Route path = "/register" component = {UserForm} /> */}
      <div className = "navContainer"> <Navigation /></div>
      <Route path = "/register" component = {RegisterTest} />
      <Route exact path = "/" component = {Login} />
    </div>
  );
}

export default App;
