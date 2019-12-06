import React from 'react'
import Movies, { MovieListQueryResult } from '../../models/Movies'
import MovieListCategory from '../../models/MovieListCategory'
import MovieCard from '../partial/MovieCard'

interface State {
  category: MovieListCategory,
  page: number,
  result: MovieListQueryResult | null,
  pending: boolean
}

export default class Home extends React.Component {
  state: State = {
    category: MovieListCategory.Popular,
    page: 1,
    result: null,
    pending: false
  }

  render () {
    return <div className='row'>
      <div className='col-sm-3'>
        <div className='list-group'>
          <button onClick={() => { this.category = MovieListCategory.Popular }} className={`list-group-item list-group-item-action ${this.state.category === MovieListCategory.Popular ? 'active' : ''}`}>Popular</button>
          <button onClick={() => { this.category = MovieListCategory.TopRated }} className={`list-group-item list-group-item-action ${this.state.category === MovieListCategory.TopRated ? 'active' : ''}`}>Top Rated</button>
          <button onClick={() => { this.category = MovieListCategory.Upcoming }} className={`list-group-item list-group-item-action ${this.state.category === MovieListCategory.Upcoming ? 'active' : ''}`}>Upcoming</button>
          <button onClick={() => { this.category = MovieListCategory.NowPlaying }} className={`list-group-item list-group-item-action ${this.state.category === MovieListCategory.NowPlaying ? 'active' : ''}`}>Now Playing</button>
        </div>
      </div>
      <div className='col'>
        <div className="row">
          {
            this.state.result
            ? this.state.result.results.map(result => <MovieCard movie={result} />)
            : <h1>Finding movies</h1>
          }
        </div>
      </div>
    </div>
  }

  set category (category: MovieListCategory) {
    this.setState({
      category
    }, () => { this.page = 1 })
  }

  set page (page: number) {
    this.setState({
      result: null,
      page
    })
  }

  componentDidMount () {
    this.componentDidUpdate()
  }

  componentDidUpdate () {
    if (!this.state.result && !this.state.pending) {
      this.setState({
        pending: true
      }, () => {
        Movies.list(this.state.category, this.state.page).then(result => this.setState({
          result,
          pending: false
        }))
      })
    }
  }
}
