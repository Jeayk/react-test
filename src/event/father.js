// 发布者 通过emit事件触发方法，发布订阅消息给订阅者
import React from 'react'
import Son1 from './son1'
import Son2 from './son2'
import  { Button } from 'antd'
import emitter from './event'

class Father extends React.Component {
    son: any
    constructor(props) {
        super(props)
    }
    handleClick = () => {
        // emit事件触发方法，通过事件名称找对应的事件处理函数info，将事件处理函数作为参数传入
        emitter.emit('info', '我是来自father的info')
    }
    render() {
        return (
            <div>
                <Button type='primary' onClick={this.handleClick}>
                    点击按钮发布事件
                </Button>
                <Son1 />
                <Son2 />
            </div>
        )
    }
}
export default Father