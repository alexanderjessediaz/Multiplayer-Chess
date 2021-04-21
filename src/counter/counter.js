import React from 'react'

export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
        this.increment = () => this.setState({counter: this.state})
        this.decrement = () => this.setState({counter: this.state})
    }
    render() {
        console.log("render")

        return <div>

        <div classname="counter">
            Counter: {this.state.counter}
        </div>
    </div>
    }
}