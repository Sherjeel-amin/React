// Higer order components (HOC) A pattern where a function takes a component as an argument and returns a new component - to share functionality between the components -- const EnhancedComponent = higherOrderComponent(originalComponent)

import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () => {
        this.setState(prevState =>{
            return {count: prevState.count +1}
        })
    }
    
  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={this.incrementCount}> Clicked {count} times </button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)
