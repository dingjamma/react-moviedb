import React from 'react'
import { liked, disliked } from '../../models/UserCustomization'
import { Button, ButtonGroup } from 'react-bootstrap'
import locale from '../../locales/LocaleImports'
import MovieDetailResultObject from '../../models/MovieDetailResultObject'

interface Props {
  movie: MovieDetailResultObject
}

export default class RateButton extends React.PureComponent {
  props: Readonly<Props>

  constructor (props: Readonly<Props>) {
    super(props)
    this.props = props
  }

  render () {
    return <ButtonGroup>
      <Button variant='success' disabled={this.disliked} className='ml-1' onClick={() => {
        this.liked
        ? liked.remove(this.props.movie)
        : liked.add(this.props.movie)
        this.forceUpdate()
      }}>{this.liked ? locale.liked : locale.like}</Button>
      <Button variant='danger' disabled={this.liked} onClick={() => {
        this.disliked
        ? disliked.remove(this.props.movie)
        : disliked.add(this.props.movie)
        this.forceUpdate()
      }}>{this.disliked ? locale.disliked : locale.dislike}</Button>
    </ButtonGroup>
  }

  get liked () {
    return liked.has(this.props.movie)
  }

  get disliked () {
    return disliked.has(this.props.movie)
  }
}
