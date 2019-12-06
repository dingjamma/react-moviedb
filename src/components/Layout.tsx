import React from 'react'
import Navigation from './partial/Navigation'

export default class Layout extends React.PureComponent {
  render () {
    return <div>
      <header>
        <Navigation />
      </header>
      <main className='container-fluid' style={{paddingTop: 10}}>
        {this.props.children}
      </main>
      <hr />
      <footer className='container-fluid'>
        <img alt='TMDb logo' style={{width: 70}} src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg' />
        <p className='text-muted'>*This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <p className='text-muted'>黔ICP备17008543号-1</p>
      </footer>
    </div>
  }
}
