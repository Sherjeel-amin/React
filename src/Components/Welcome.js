import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        const {name,sName} = this.props    // destructuring props in Classes
        return <h1> Hello I am {name} from the class Comp aka {sName}</h1>
    }
}

// We can use props for dynamic redering
// Props are immutable. We cannot change values of the props // 

export default Welcome