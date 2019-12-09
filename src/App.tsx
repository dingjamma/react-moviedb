import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/views/Home'
import About from './components/views/About'
import Search from './components/views/Search'
import Discover from './components/views/Discover'
import Detail from './components/views/Detail'
import Favorites from './components/views/Favorites'

export default class App extends React.PureComponent {
  render () {
    return <HashRouter hashType='hashbang'>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/search/:query' component={Search} />
          <Route path='/discover' component={Discover} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
      </Layout>
    </HashRouter>
  }
}
