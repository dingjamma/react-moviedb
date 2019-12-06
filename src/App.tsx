import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/views/Home'
import About from './components/views/About'

export default class App extends React.PureComponent {
  render () {
    return <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  }
}
