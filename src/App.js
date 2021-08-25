import React from 'react'
import Son from './son'
class Father extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    info: '',
  }
  callback = value => {
    // 此处的value便是子组件带回
    this.setState({
      info: value
    })
  }
  render() {
    return (
        <div>
          <p>父组件：{this.state.info}</p>
          子组件：<Son callback={this.callback} />
        </div>
    )
  }
}
export default Father