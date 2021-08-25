import React from 'react'
import Son from './son'
import { Provider } from './context'
class Father extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        info: 'info from father'
    }
    render() {
        return (
            <Provider value={this.state.info}>
                <div>
                    <p>{this.state.info}</p>
                    <Son />
                </div>
            </Provider>
        )
    }
}
export default Father