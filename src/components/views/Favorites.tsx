import React from 'react'
import { favorites } from '../../models/UserCustomization'
import MovieList from '../partial/MovieList'
import locale from '../../locales/LocaleImports'

export default class Favorites extends React.Component {
  render () {
    return favorites.all.length ? <MovieList movies={favorites.all} /> : locale.no_favorites
  }
}
