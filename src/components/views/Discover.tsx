import React, { FormEvent, ChangeEvent } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import Movies, { Genre, MovieQueryResult } from '../../models/Movies'
import MovieList from '../partial/MovieList'
import locale from '../../locales/LocaleImports'

interface State {
  genres?: Genre[],
  yearInputText: string,
  selectedGenreIds: number[],
  page: number,
  result: MovieQueryResult | null,
  pending: boolean
}

export default class Discover extends React.Component {
  state: State = {
    yearInputText: '',
    selectedGenreIds: [],
    page: 1,
    result: null,
    pending: false
  }

  render () {
    return <>
      <Form className='mb-2' onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!this.state.pending) {
          this.setState({
            pending: true,
            page: 1,
            result: null
          }, () => {
            Movies.discover(Number(this.state.yearInputText), this.state.selectedGenreIds, this.state.page).then(result => this.setState({
              result,
              pending: false
            }))
          })
        }
      }}>
        <Form.Group>
          <Form.Label>{locale.year}</Form.Label>
          <Form.Control type='number' maxLength={4} minLength={4} placeholder={locale.unspecified} value={this.state.yearInputText} onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({
              yearInputText: event.target.value
            })
          } />
        </Form.Group>
        <Form.Group>
          <Form.Label>{locale.genres}</Form.Label>
          <Row>
            {this.state.genres?.map(genre => 
              <Col key={genre.id} xs={7} sm={4} md={3} lg={2}>
                <Form.Check inline
                  checked={this.state.selectedGenreIds.includes(genre.id)}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const genres = this.state.selectedGenreIds
                    if (event.target.checked) {
                      genres.push(genre.id)
                    } else {
                      genres.splice(genres.indexOf(genre.id), 1)
                    }
                    this.setState({selectedGenreIds: genres})
                  }}
                />
                <Form.Label>{genre.name}</Form.Label>
              </Col>
            )}
          </Row>
        </Form.Group>
        <Button type='submit' variant='success' disabled={!this.state.yearInputText && !this.state.selectedGenreIds?.length}>{locale.find}</Button>
      </Form>
      {
        this.state.result
        ? <MovieList movies={this.state.result.results} />
        : this.state.pending ? <h2>{locale.finding_movies}</h2> : <p>{locale.condition_prompt}</p>
      }
    </>
  }

  async componentDidMount () {
    this.setState({
      ...await Movies.genres
    })
  }
}
