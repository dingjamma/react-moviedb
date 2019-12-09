import React, { ChangeEvent, FormEvent } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import locale from '../../locales/LocaleImports'

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
          <Nav.Item>
            <NavLink exact to='/' className='nav-link'>{locale.nav_home}</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to='/about' className='nav-link'>{locale.nav_about}</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to='/discover' className='nav-link'>{locale.nav_discover}</NavLink>
          </Nav.Item>
          <NavDropdown title={locale.nav_my} id='navbarDropdown'>
            <Link to='/favorites'>
              <NavDropdown.Item as='div'>
                {locale.nav_favorites}
              </NavDropdown.Item>
            </Link>
            <Link to='/rated'>
              <NavDropdown.Item as='div'>
                {locale.nav_rated}
              </NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>
        <Form inline className='my-2 my-md-0' onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          if (this.state.searchInputText) {
            this.setState({
              redirect: <Redirect to={'/search/' + window.encodeURIComponent(this.state.searchInputText)} />
            }, () => this.setState({
              searchInputText: '',
              redirect: null
            }))
          }
        }}>
          <Form.Control onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({
              searchInputText: event.target.value
            })
          } value={this.state.searchInputText} className='mr-sm-2' type='search' placeholder={locale.nav_search} aria-label='Search' />
          <Button variant='outline-success' className='my-2 my-sm-0' type='submit'>{locale.nav_search}</Button>
          {this.state.redirect}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  }
}
