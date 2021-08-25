import React from 'react'
import { Button } from 'antd'

class Son extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        info: 'son'
    }
    handleChange = (e) => {
        this.setState({
            info: e.target.value
        })
    }
    clearInput = () => {
        this.setState({
            info: ''
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.info}</div>
                <input type='text' onChange={this.handleChange} />
            </div>
        )
    }
}
export default Son