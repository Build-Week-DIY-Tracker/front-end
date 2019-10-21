import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Nav>
        <NavLink href="/register">Register</NavLink> <NavLink href="/">Home</NavLink> <NavLink href="#">Projects</NavLink> <NavLink href="#">Contact</NavLink>
      </Nav>
    </div>
  );
}

export default Example;