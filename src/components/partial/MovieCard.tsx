import React from 'react'
import MovieListResultObject from '../../models/MovieListResultObject'
import { imgroot } from '../../appSettings.json'

interface Props {
  movie: MovieListResultObject
}

export default class MovieCard extends React.PureComponent {
  props: Readonly<Props>

  constructor(props: Readonly<Props>) {
    super(props)
    this.props = props
  }

  render () {
    return <div className="col-xl-3">
      <div className='card'>
        {this.props.movie.poster_path && <img src={`${imgroot}/w1000_and_h563_face${this.props.movie.poster_path}`} className='card-img-top' alt={this.props.movie.title} />}
        <div className='card-body'>
          <h5 className="card-title">{this.props.movie.title}</h5>
          <h6 className='card-subtitle text-muted' style={{display: 'grid'}}>
            <span>{this.props.movie.release_date}</span>
            <span style={{gridColumn: 2, textAlign: 'right'}}>★{this.props.movie.vote_average}</span>
          </h6>
          <p className='card-text'>{this.props.movie.overview}</p>
        </div>
      </div>
    </div>
  }
}
