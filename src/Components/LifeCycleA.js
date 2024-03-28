import React, { Component } from 'react'
import LifeCycleB from './lifeCycleB'

class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Sherjeel'
    }
    console.log('LifeCycleA Construtor')
  }
  static getDerivedStateFromProps(props,state){
    console.log('LifecycleA getDerivedStateFromProps')
    return null;
  }

  componentDidMount(){
    console.log('LifeCycle A ComponentDidMount')
  }
  
  shouldComponentUpdate(){
    console.log('LifeCycleA shouldComponentUpdate')
    return true;
  }
  getSnapshotBeforeUpdate(){
    console.log('LifeCycleA getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifecycleA ComponentDidUpdate')
  }

  changeState = () =>{
    this.setState({
      name: 'Sherjeel'
    })
  }


  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
        </div>
    )
  }
}

export default LifeCycleA
