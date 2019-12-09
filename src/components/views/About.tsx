import React from 'react'
import { Button } from 'react-bootstrap'
import { repo } from '../../appSettings.json'

export default class About extends React.PureComponent {
  render () {
    return <>
      <p>This project is the final assignment for SSDP React.</p>
      <p>It is a site that you can browse, search, and read more about movies in the movie library.</p>
      <Button variant='info' href={repo}>Browse source</Button>
    </>
  }
}
