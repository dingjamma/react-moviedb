import React from 'react'
import { Button } from 'react-bootstrap'
import { repo } from '../../appSettings.json'
import locale from '../../locales/LocaleImports'

export default class About extends React.PureComponent {
  render () {
    return <>
      {locale.about_text.split('\n').map(x => <p>{x}</p>)}
      <Button variant='info' href={repo}>{locale.about_repo}</Button>
    </>
  }
}
