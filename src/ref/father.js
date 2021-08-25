import React from 'react'
import Son from './son'
import { Button } from 'antd'

class Father extends React.Component {
    son: any
    constructor(props) {
        super(props)
        this.son = React.createRef() // 在此处创建ref
    }
    clearSonInput = () => {
        this.son.current.clearInput()
        // const { current } = this.son // 注意，这里必须通过 this.son.current 拿到子组件的实例
        // console.log(this.son)
        // current.clearInput()
    }
    render() {
        return (
            <div>
                <Son ref={this.son} />
                <Button type='primary' onClick={this.clearSonInput}>
                    清空子组件的input
                </Button>
            </div>
        )
    }
}
export default Father