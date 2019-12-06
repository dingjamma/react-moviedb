import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

export default class Navigation extends React.PureComponent {
  render () {
    return <Navbar variant='dark' bg='dark' expand='md'>
      <Navbar.Brand>react-moviedb</Navbar.Brand>
      <Navbar.Toggle data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-label='Toggle navigation' />

      <Navbar.Collapse id='navbarSupportedContent'>
        <Nav className='mr-auto'>
          <Nav.Item className='active'>
            <Link to='/' className='nav-link'>Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/about' className='nav-link'>About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/discover' className='nav-link'>Discover</Link>
          </Nav.Item>
          <NavDropdown title='My' id='navbarDropdown'>
            <NavDropdown.Item>
              <Link to='/favorites'>Favorites</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to='/rated'>Rated</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className='my-2 my-md-0'>
          <Form.Control className='mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
          <Button variant='outline-success' className='my-2 my-sm-0' type='submit'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  }
}
