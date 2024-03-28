import React from 'react'

const Hello = () => {
//     return (
//         <div className = 'DemoClass'>   // This is JSX format
//             <h1>Hello Sherjeel</h1>
//         </div>
//     )
// }
    return React.createElement('div' , {id : 'hello'}, React.createElement('h1' ,{className: 'DemoClass'} , "Hello Sherjeel"));

}

export default Hello