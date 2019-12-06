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
    </div>
  }
}
