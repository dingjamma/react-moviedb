import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/views/Home'

export default class App extends React.PureComponent {
  render () {
    return <BrowserRouter>
      <Layout>
        <Switch>
        <Route path='/'>
          <Home />
        </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  }
}
