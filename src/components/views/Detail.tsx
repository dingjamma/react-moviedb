import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Movies from '../../models/Movies';
import MovieDetailResultObject from '../../models/MovieDetailResultObject';
import { imgroot } from '../../appSettings.json'
import FavoriteButton from '../partial/FavoriteButton';

interface Params {
  id?: string
}

interface State {
  result?: MovieDetailResultObject
}

interface Props extends RouteComponentProps<Params> { }

export default class Detail extends React.Component {
  props: Readonly<Props>
  state: State = { }

  constructor (props: Readonly<Props>) {
    super(props)
    this.props = props
  }

  render () {
    return <Jumbotron>
      <Button variant='dark' onClick={() => this.props.history.goBack()}>← Back</Button>
      {this.state.result ? <>
        {this.state.result.homepage && <Button variant='success' className='ml-1' href={this.state.result.homepage}>Homepage</Button>}
        <FavoriteButton id={this.state.result.id} />
        <h1>{this.state.result.title}</h1>
        {this.state.result.original_title !== this.state.result.title && <h2>this.state.result.original_title</h2>}
        <Row>
          {
            this.state.result.poster_path &&
            <Col sm={6} md={5} lg={4} xl={3} >
              <img style={{width: '100%'}} src={`${imgroot}/w600_and_h900_bestv2${this.state.result.poster_path}`} alt={this.state.result.title} />
            </Col>
          }
          <Col>
            <dl>
              <dt>Genres</dt>
              <dd>{this.state.result.genres.map(x => x.name).join(', ')}</dd>
              <dt>Overview</dt>
              <dd>{this.state.result.overview}</dd>
              <dt>Production Companies</dt>
              <dd>{this.state.result.production_companies.map(x => x.name).join(', ')}</dd>
              <dt>Production Countries</dt>
              <dd>{this.state.result.production_countries.map(x => x.name).join(', ')}</dd>
              <dt>Release Date</dt>
              <dd>{this.state.result.release_date}</dd>
              <dt>Revenue</dt>
              <dd>${this.state.result.revenue.toString().replace(/(?=(?!\b)(\d{3})+$)/g, ',')}</dd>
              {this.state.result.runtime && <>
                <dt>Runtime</dt>
                <dd>{this.state.result.runtime} minutes</dd>
              </>}
              <dt>Spoken Languages</dt>
              <dd>{this.state.result.spoken_languages.map(x => x.name).join(', ')}</dd>
              <dt>Status</dt>
              <dd>{this.state.result.status}</dd>
              <dt>Rating</dt>
              <dd>Average of {this.state.result.vote_average}/10 voted by {this.state.result.vote_count} people</dd>
            </dl>
          </Col>
        </Row>
      </> : <h1>Loading</h1>}
    </Jumbotron>
  }

  async componentDidMount () {
    this.setState({
      result: this.props.match.params.id && await Movies.detail(this.props.match.params.id)
    })
  }
}
