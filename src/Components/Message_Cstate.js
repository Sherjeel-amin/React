import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : "Welcome Visitor"
        }
    }

    changeMessage(){
        this.setState({
            message : "Thanks for subscribing!"
        })
    }

    render(){
        return (
        <div>
        <h1> 
            {this.state.message}
        </h1>
        <button onClick={()=> this.changeMessage()}>Subscribe!</button>
        </div>
        )
    }
}

// We can use props for dynamic redering
// Props are immutable. We cannot change values of the props // 

export default Message