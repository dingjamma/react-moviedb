import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MovieQueryResult } from '../../models/Movies';
import MovieList from '../partial/MovieList';
import Movies from '../../models/Movies'

interface Params {
  query?: string
}

interface State {
  result: MovieQueryResult | null,
  page: number,
  pending: boolean
}

interface Props extends RouteComponentProps<Params> {
}

export default class Search extends React.PureComponent {
  props: Readonly<Props>
  state: State = {
    result: null,
    page: 1,
    pending: false
  }

  constructor (props: Readonly<Props>) {
    super(props)
    this.props = props
  }

  render () {
    return <>
      <h1>{this.props.match.params.query ? `Search result for ${window.decodeURIComponent(this.props.match.params.query)}` : 'No keyword to search for'}</h1>
      {
        this.state.result
        ? <MovieList movies={this.state.result.results} />
        : <h2>Finding movies</h2>
      }
    </>
  }

  componentDidMount () {
    this.componentDidUpdate()
  }

  componentDidUpdate () {
    if (!this.state.result && !this.state.pending) {
      this.setState({
        pending: true
      }, async () => this.setState({
        result: this.props.match.params.query && await Movies.search(this.props.match.params.query),
        pending: false
      }))
    }
  }
}
