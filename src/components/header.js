import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function header() {
  return ( 
      <Navbar className='d-flex max-w-full' style={{ justifyContent: 'space-evenly', backgroundColor: '#fb00ff' }}>
        <Navbar.Brand href='/'>Logo</Navbar.Brand>
        <Nav variant="pills" defaultActiveKey='/'>
          <NavItem> <NavLink className="nav-link mx-3"   to="/" style={{ color: '#081854' }}>Home</NavLink > </NavItem>
          <NavItem> <NavLink   className="nav-link mx-3"   to="/result" style={{ color: '#081854' }}>All Result</NavLink > </NavItem>
        </Nav>
      </Navbar> 
  )
}
export default header