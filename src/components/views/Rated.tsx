import React from 'react'
import { liked, disliked } from '../../models/UserCustomization'
import MovieList from '../partial/MovieList'
import locale from '../../locales/LocaleImports'

export default class Rated extends React.Component {
  render () {
    return <>
      <h1>{locale.liked}</h1>
      {liked.all.length ? <MovieList movies={liked.all} /> : locale.no_liked}
      <h1>{locale.disliked}</h1>
      {disliked.all.length ? <MovieList movies={disliked.all} /> : locale.no_disliked}
    </>
  }
}
