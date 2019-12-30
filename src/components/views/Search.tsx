import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MovieQueryResult } from '../../models/Movies'
import MovieList from '../partial/MovieList'
import Movies from '../../models/Movies'
import locale from '../../locales/LocaleImports'
import PageControl from '../partial/PageControl'

interface Params {
  query?: string
}

interface State {
  result: MovieQueryResult | null,
  page: number,
  pending: boolean,
  query?: string
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
      <h1>{this.state.query ? locale.search_result_title.replace('$1', window.decodeURIComponent(this.state.query)) : locale.search_no_keyword}</h1>
      {
        this.state.result
        ? <>
          <MovieList movies={this.state.result.results} />
          <PageControl current={this.state.result.page} max={this.state.result.total_pages} onChange={(page: number) => { this.page = page }} />
        </>
        : <h2>{locale.finding_movies}</h2>
      }
    </>
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
    if (this.state.query !== this.props.match.params.query) {
      this.setState({
        query: this.props.match.params.query,
        result: null,
        page: 1
      })
    }
    if (!this.state.result && !this.state.pending) {
      this.setState({
        pending: true
      }, async () => this.setState({
        result: this.state.query && await Movies.search(this.state.query, this.state.page),
        pending: false
      }))
    }
  }
}
