import React from 'react'
import { favorites } from '../../models/UserCustomization'
import { Button } from 'react-bootstrap'
import locale from '../../locales/LocaleImports'
import MovieDetailResultObject from '../../models/MovieDetailResultObject'

interface Props {
  movie: MovieDetailResultObject
}

export default class FavoriteButton extends React.PureComponent {
  props: Readonly<Props>

  constructor (props: Readonly<Props>) {
    super(props)
    this.props = props
  }

  render () {
    return <Button variant={this.favorited ? 'secondary' : 'primary'} className='ml-1' onClick={() => {
      this.favorited
      ? favorites.remove(this.props.movie)
      : favorites.add(this.props.movie)
      this.forceUpdate()
    }}>{this.favorited ? locale.unfavorite : locale.favorite}</Button>
  }

  get favorited () {
    return favorites.has(this.props.movie)
  }
}
