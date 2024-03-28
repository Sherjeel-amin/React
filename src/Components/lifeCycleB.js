import React, { Component } from 'react'

class LifeCycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Sherjeel'
    }
    console.log('LifeCycleBConstrutor')
  }
  static getDerivedStateFromProps(props,state){
    console.log('LifecycleB getDerivedStateFromProps')
    return null;
  }

  componentDidMount(){
    console.log('LifeCycleB ComponentDidMount')
  }
  shouldComponentUpdate(){
    console.log('LifeCycleB shouldComponentUpdate')
    return true;
  }
  getSnapshotBeforeUpdate(){
    console.log('LifeCycleB getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifecycleB ComponentDidUpdate')
  }
  
  render() {
    console.log('LifeCycleB render')
    return (
        <div>LifeCycle B</div>
     
    )
  }
}

export default LifeCycleB
