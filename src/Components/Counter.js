import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.state.count = this.state.count +1 // will print to console but not the UI // Do not modify the state directly
        this.setState({
            count: this.state.count + 1
            
        },
        function (){
            console.log("Call back value :" ,this.state.count)
        })
    
    }
    decrement(){
        this.setState({
            count: this.state.count -1
        }),
        function(){
            console.log("Call back value :", this.state.count)
        }
    }
  

    render() {
        return (
            <div>
                <div> Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
