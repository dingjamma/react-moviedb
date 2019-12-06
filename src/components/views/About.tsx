import React from 'react'

export default class About extends React.PureComponent {
  render () {
    return <>
      <p>This project is the final assignment for SSDP React.</p>
      <p>It is a site that you can browse the movie library provided by:</p>
      <img style={{width: 100}} src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg' />
      <p className='text-muted'>*This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
    </>
  }
}
