import React, { Component } from 'react'
import MemoComp from './MemoComp'

export class ParentMemo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Sherjeel"
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Sherjeel"
            },2000)
        })
    }
    

  render() {
    console.log("************* Parent Render ***************")
    return (
      <div>
        Parent Comp 
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentMemo
