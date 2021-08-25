import React from 'react'
interface IProps {
    callback: string => void
}
class Son extends React.Component<IProps> {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = e => {
        // 在此处将参数带回
        this.props.callback(e.target.value)
    }
    render() {
        return(
            <div>
                <input type='text' onChange={this.handleChange} />
            </div>
        )
    }
}
export default Son