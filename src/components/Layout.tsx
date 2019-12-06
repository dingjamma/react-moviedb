import React from 'react'
import { Link } from 'react-router-dom'

export default class Layout extends React.PureComponent {
  render () {
    return <div>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <a className='navbar-brand' href='#'>react-moviedb</a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to='/discover' className='nav-link'>Discover</Link>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                  My
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <Link to='/favorites' className='dropdown-item'>Favorites</Link>
                  <Link to='/rated' className='dropdown-item'>Rated</Link>
                </div>
              </li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
            </form>
          </div>
        </nav>
      </header>
      <main className='container-fluid' style={{paddingTop: 10}}>
        {this.props.children}
      </main>
    </div>
  }
}
