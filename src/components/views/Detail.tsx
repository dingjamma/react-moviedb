import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Movies from '../../models/Movies';
import MovieDetailResultObject from '../../models/MovieDetailResultObject';
import { imgroot } from '../../appSettings.json'
import FavoriteButton from '../partial/FavoriteButton';
import locale from '../../locales/LocaleImports'
import RateButton from '../partial/RateButton'

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
    const movie = this.state.result
    return <Jumbotron>
      <Button variant='dark' onClick={() => this.props.history.goBack()}>← {locale.back}</Button>
      {movie ? <>
        {movie.homepage && <Button variant='success' className='ml-1' href={movie.homepage}>{locale.homepage}</Button>}
        <FavoriteButton movie={movie} />
        <RateButton movie={movie} />
        <h1>{movie.title}</h1>
        {movie.original_title !== movie.title && <h2>{movie.original_title}</h2>}
        {movie.tagline && <h4>{movie.tagline}</h4>}
        <Row>
          {
            movie.poster_path &&
            <Col sm={6} md={5} lg={4} xl={3} >
              <img style={{width: '100%'}} src={`${imgroot}/w600_and_h900_bestv2${movie.poster_path}`} alt={movie.title} />
            </Col>
          }
          <Col>
            <dl>
              <dt>{locale.genres}</dt>
              <dd>{movie.genres.map(x => x.name).join(', ')}</dd>
              <dt>{locale.overview}</dt>
              <dd>{movie.overview}</dd>
              <dt>{locale.production_companies}</dt>
              <dd>{movie.production_companies.map(x => x.name).join(', ')}</dd>
              <dt>{locale.production_countries}</dt>
              <dd>{movie.production_countries.map(x => x.name).join(', ')}</dd>
              <dt>{locale.release_date}</dt>
              <dd>{movie.release_date}</dd>
              <dt>{locale.revenue}</dt>
              <dd>${movie.revenue.toString().replace(/(?=(?!\b)(\d{3})+$)/g, ',')}</dd>
              {movie.runtime && <>
                <dt>{locale.runtime}</dt>
                <dd>{movie.runtime} {locale.minutes}</dd>
              </>}
              <dt>{locale.spoken_languages}</dt>
              <dd>{movie.spoken_languages.map(x => x.name).join(', ')}</dd>
              <dt>{locale.status}</dt>
              <dd>{movie.status}</dd>
              <dt>{locale.rating}</dt>
              <dd>{locale.rating_body.replace('$1', movie.vote_average.toString()).replace('$2', movie.vote_count.toString())}</dd>
            </dl>
          </Col>
        </Row>
      </> : <h1>{locale.loading}</h1>}
    </Jumbotron>
  }

  async componentDidMount () {
    this.setState({
      result: this.props.match.params.id && await Movies.detail(this.props.match.params.id)
    })
  }
}
