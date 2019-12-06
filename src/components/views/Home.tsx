import React from 'react'
import { Link } from 'react-router-dom'
import Movies, { MovieListQueryResult } from '../../models/Movies'
import { imgroot } from '../../appSettings.json'
import MovieListCategory from '../../models/MovieListCategory'

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

  constructor (props: Readonly<any>) {
    super(props)
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
            ? this.state.result.results.map(result => 
              <div className="col-xl-3">
                <div className='card'>
                  {result.poster_path && <img src={`${imgroot}/w1000_and_h563_face${result.poster_path}`} className='card-img-top' alt={result.title} />}
                  <div className='card-body'>
                    <h5 className="card-title">{result.title}</h5>
                    <h6 className='card-subtitle text-muted' style={{display: 'grid'}}>
                      <span>{result.release_date}</span>
                      <span style={{gridColumn: 2, textAlign: 'right'}}>★{result.vote_average}</span>
                    </h6>
                    <p className='card-text'>{result.overview}</p>
                  </div>
                </div>
              </div>
            )
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
      page: 1
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
