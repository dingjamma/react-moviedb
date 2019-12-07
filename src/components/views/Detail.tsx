import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import Movies from '../../models/Movies';
import MovieDetailResultObject from '../../models/MovieDetailResultObject';
import { imgroot } from '../../appSettings.json'

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
      {this.state.result ? <>
        <h1>{this.state.result.title}</h1>
        {this.state.result.original_title !== this.state.result.title && <h2>this.state.result.original_title</h2>}
        <Row>
          {
            this.state.result.poster_path &&
            <Col>
              <img src={`${imgroot}/w600_and_h900_bestv2${this.state.result.poster_path}`} alt={this.state.result.title} />
            </Col>
          }
          <Col>
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
