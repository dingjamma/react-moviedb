import React from 'react'
import MovieResultObject from '../../models/MovieResultObject'
import { imgroot } from '../../appSettings.json'
import { Col, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Props {
  movie: MovieResultObject
}

export default class MovieCard extends React.PureComponent {
  props: Readonly<Props>

  constructor(props: Readonly<Props>) {
    super(props)
    this.props = props
  }

  render () {
    return <Col md={6} lg={4} xl={3} className='mb-2'>
      <Link to={'/detail/' + this.props.movie.id} style={{textDecoration: 'none', color: 'black'}}>
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
            <Card.Text>{this.props.movie.overview.length < 200 ? this.props.movie.overview : this.props.movie.overview.slice(0, 200) + '…'}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  }
}
