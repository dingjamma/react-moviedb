import React from 'react'
import Movies, { MovieQueryResult } from '../../models/Movies'
import MovieListCategory from '../../models/MovieListCategory'
import MovieList from '../partial/MovieList'
import { Row, Col, ListGroup } from 'react-bootstrap'

interface State {
  category: MovieListCategory,
  page: number,
  result: MovieQueryResult | null,
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
    return <Row>
      <Col sm={5} md={4} lg={3} xl={2}>
        <ListGroup>
          <ListGroup.Item action as='button' onClick={() => { this.category = MovieListCategory.Popular }} className={this.state.category === MovieListCategory.Popular ? 'active' : ''}>Popular</ListGroup.Item>
          <ListGroup.Item action as='button' onClick={() => { this.category = MovieListCategory.TopRated }} className={this.state.category === MovieListCategory.TopRated ? 'active' : ''}>Top Rated</ListGroup.Item>
          <ListGroup.Item action as='button' onClick={() => { this.category = MovieListCategory.Upcoming }} className={this.state.category === MovieListCategory.Upcoming ? 'active' : ''}>Upcoming</ListGroup.Item>
          <ListGroup.Item action as='button' onClick={() => { this.category = MovieListCategory.NowPlaying }} className={this.state.category === MovieListCategory.NowPlaying ? 'active' : ''}>Now Playing</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col className='pt-3 pt-sm-0'>
        {
          this.state.result
          ? <MovieList movies={this.state.result.results} />
          : <h2>Finding movies</h2>
        }
      </Col>
    </Row>
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
      }, async () => this.setState({
        result: await Movies.list(this.state.category, this.state.page),
        pending: false
      }))
    }
  }
}
