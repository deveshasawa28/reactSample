import React from 'react';
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function header() {
  return ( 
      <Navbar className='d-flex max-w-full' style={{ justifyContent: 'space-evenly', backgroundColor: '#fb00ff' }}>
        <Navbar.Brand href='/'>Logo</Navbar.Brand>
        <Nav variant="pills" defaultActiveKey='/'>
          <NavItem> <NavLink activeClassName="active" className="nav-link mx-3" eventKey='/' to="/" style={{ color: '#081854' }}>Home</NavLink > </NavItem>
          <NavItem> <NavLink activeClassName="active" className="nav-link mx-3" eventKey='/result' to="/result" style={{ color: '#081854' }}>All Result</NavLink > </NavItem>
        </Nav>
      </Navbar> 
  )
}
export default header