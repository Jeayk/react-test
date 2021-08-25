// 订阅者1
// 通过emitter.addListener(事件名称, 函数名)方法，进行事件监听(订阅)
// 通过emitter.removeListener(事件名称, 函数名)方法，进行事件销毁(取消订阅)
import React from 'react'
import { Button } from 'antd'
import emitter from './event'

class Son1 extends React.Component {
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
                info: `Son1收到消息--${info}`
            })
        })
    }

    componentWillUnmount() {
        // 组件销毁前移除事件监听
        emitter.removeListener('info', (info) => {
            this.setState({
                info: `Son1即将移除事件监听--${info}`
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
export default Son1