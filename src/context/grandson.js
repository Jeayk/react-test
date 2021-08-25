import React from 'react'
import { Consumer } from './context'
class GrandSon extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Consumer>
                {(info) => (
                    // 通过 Consumer 中可以直接获取父组件的值
                    <div>
                        <p>祖父组件的值：{info}</p>
                    </div>
                )}
            </Consumer>
        )
    }
}
export default GrandSon