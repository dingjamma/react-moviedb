import React from 'react'
import { favorites } from '../../models/UserCustomization'
import { Button } from 'react-bootstrap'

interface Props {
  id: number
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
      ? favorites.remove(this.props.id)
      : favorites.add(this.props.id)
      this.forceUpdate()
    }}>{this.favorited ? 'Unfavorite' : 'Favorite'}</Button>
  }

  get favorited () {
    return favorites.all.includes(this.props.id)
  }
}
