import React from 'react'
import GrandSon from './grandson'
import { Consumer } from './context'
class Son extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Consumer>
                {(info) => (
                    // 通过Consumer直接获取父组件的值
                    <div>
                        <p>父组件的值：{info}</p>
                        <GrandSon />
                    </div>
                )}
            </Consumer>
        )
    }
}
export default Son