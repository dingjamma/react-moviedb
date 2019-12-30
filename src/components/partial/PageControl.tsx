import React from 'react'
import { Pagination } from 'react-bootstrap'

interface Props {
  max: number
  current: number
  onChange: Function
}

export default class PageControl extends React.PureComponent {
  props: Readonly<Props>

  constructor(props: Readonly<Props>) {
    super(props)
    this.props = props
  }

  render () {
    const max = this.props.max
    const current = this.props.current
    const items = []
    for (let p = current - 4 > 0 ? current - 4 : 1; p <= (current + 4 < max ? current + 4 : max); p++) {
      items.push(<Pagination.Item active={current === p} onClick={() => this.props.onChange(p)} key={p}>{p}</Pagination.Item>)
    }
    return <Pagination>
      <Pagination.First disabled={current <= 1} onClick={() => this.props.onChange(1)} />
      <Pagination.Prev disabled={current <= 1} onClick={() => this.props.onChange(current - 1)} />
      {items}
      <Pagination.Next disabled={current >= max} onClick={() => this.props.onChange(current + 1)} />
      <Pagination.Last disabled={current >= max} onClick={() => this.props.onChange(max)} />
    </Pagination>
  }
}
