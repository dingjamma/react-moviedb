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
    return favorites.all.includes(this.props.id)
    ? <Button variant='secondary' className='ml-1' onClick={() => {
      favorites.remove(this.props.id)
      this.forceUpdate()
    }}>Unfavorite</Button>
    : <Button variant='primary' className='ml-1' onClick={() => {
      this.props && favorites.add(this.props.id)
      this.forceUpdate()
    }}>Favorite</Button>
  }
}
