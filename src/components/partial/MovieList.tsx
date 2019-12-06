import React from "react"
import MovieListResultObject from "../../models/MovieListResultObject"
import MovieCard from "./MovieCard"

interface Props {
  movies: MovieListResultObject[]
}

export default class MovieList extends React.PureComponent {
  props: Readonly<Props>

  constructor (props: Readonly<Props>) {
    super(props)
    this.props = props
  }

  render () {
    return <div className="row">
      {this.props.movies.map(result => <MovieCard movie={result} />)}
    </div>
  }
}
