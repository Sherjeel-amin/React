import React from 'react'


const Greet = ({name,sName}) => { // Destructuring Props 

    return (<div>
        <h1>
            Hello there {name} aka {sName}
        </h1>
         {/* {props.children}  Way to show a child element as props */}

    </div>
    )
}

export default Greet

