import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
    render(){

        
        return (
            // this.state.isLoggedIn && <div>Welcome Sherjeel</div>
            this.state.isLoggedIn? 
            <div>Welcome Sherjeel</div>:
            <div>Welcome Guest</div>
        )

    }

//   render() {
//     if(this.state.isLoggedIn){
//         return (
//             <div> Welcome Sherjeel</div>
//         )
//     }else{
//             return (
//                 <div> Welcome Guest </div>
//             )
//     }

//     return (
//         <div>
//         <div>Welcome Guest </div>
//       <div>
//         Hello Sherjeel
//       </div>
//       </div>
//     )
  }


export default UserGreeting
