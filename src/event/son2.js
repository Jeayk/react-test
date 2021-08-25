// 订阅者2
import React from 'react'
import { Button } from 'antd'
import emitter from './event'

class Son2 extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        info: ''
    }
    componentDidMount() {
        // 在组件挂载完成后开始监听
        emitter.addListener('info', (info) => {
            this.setState({
                info: `Son2收到消息--${info}`
            })
        })
    }

    componentWillUnmount() {
        // 组件销毁前移除事件监听
        emitter.removeListener('info', (info) => {
            this.setState({
                info: `Son2即将移除事件监听--${info}`
            })
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.info}</div>
            </div>
        )
    }
}
export default Son2