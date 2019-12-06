import React from 'react'
import MovieListResultObject from '../../models/MovieListResultObject'
import { imgroot } from '../../appSettings.json'
import { Col, Card, Row } from 'react-bootstrap'

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
    return <Col md={6} lg={4} xl={3}>
      <Card>
        {this.props.movie.poster_path && <Card.Img variant='top' src={`${imgroot}/w1000_and_h563_face${this.props.movie.poster_path}`} alt={this.props.movie.title} />}
        <Card.Body>
          <Card.Title>{this.props.movie.title}</Card.Title>
          <Card.Subtitle className='text-muted'>
            <Row>
              <Col>{this.props.movie.release_date}</Col>
              <Col style={{textAlign: 'right'}}>★{this.props.movie.vote_average}</Col>
            </Row>
          </Card.Subtitle>
          <Card.Text>{this.props.movie.overview}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  }
}
