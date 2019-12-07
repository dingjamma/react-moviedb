import React, { ChangeEvent, FormEvent } from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

interface State {
  searchInputText: string
  redirect: Redirect | null
}

export default class Navigation extends React.Component {
  state: State = {
    searchInputText: '',
    redirect: null
  }

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
        <Form inline className='my-2 my-md-0' onSubmit={this.searchFormSubmit.bind(this)}>
          <Form.Control onChange={this.searchInputChange.bind(this)} value={this.state.searchInputText} className='mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
          <Button variant='outline-success' className='my-2 my-sm-0' type='submit'>Search</Button>
          {this.state.redirect}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  }

  searchInputChange (event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchInputText: event.target.value
    })
  }

  searchFormSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (this.state.searchInputText) {
      this.setState({
        redirect: <Redirect to={'/search/' + window.encodeURIComponent(this.state.searchInputText)} />
      }, () => this.setState({
        searchInputText: '',
        redirect: null
      }))
    }
  }
}
