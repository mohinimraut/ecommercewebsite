import React from 'react'
import { Button,Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import { signout } from '../../actions';

function Header(props) {

  const auth=useSelector(state=>state.auth)
const dispatch=useDispatch()
  const logout=()=>{
    dispatch(signout());
  }

  const renderLoggedInLinks=()=>{
    return(
      <Nav>
      <li className="nav-item" >
  <span to="/signup" className="nav-link" onClick={logout}>SIGNOUT</span>
      </li>
  </Nav>
    );
    
  }

  const renderNonLoggedInLinks=()=>{
    return(
      <Nav>
          <li className="nav-item" >
          <Link to="/signin" className="nav-link">SIGNIN</Link>
          </li>
          <li className="nav-item" >
      <Link to="/signup" className="nav-link">SIGNUP</Link>
          </li>
      </Nav>
          )
  }
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" style={{zIndex:1,backgroundColor:"#3B3E79"}}>
    <Container fluid>
      {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
      <Link to="/" className='navbar-brand'>ADMIN DASHBOARD</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
       {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header