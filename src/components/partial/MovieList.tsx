import React from "react"
import MovieListResultObject from "../../models/MovieListResultObject"
import MovieCard from "./MovieCard"
import { Row } from "react-bootstrap"

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
    return <Row>
      {this.props.movies.map(result => <MovieCard key={result.id} movie={result} />)}
    </Row>
  }
}
