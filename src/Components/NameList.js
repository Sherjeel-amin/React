import React from 'react'
import Person from './Person'

function NameList() {
    const person = [
        {
            id: 1,
            name: "Sherjeel",
            age: 22,
            skill: "React"
        },
        {
            id: 2,
            name: "Momin",
            age: 26,
            skill: "Angular"

        }
    ]
    const personList = person.map(function (person) {
        return (
            <Person key={person.id} person={person} />
        )
    })
    return (
        <div>
            <div>{personList}</div>
        </div>
    )
}

export default NameList



















// import React from 'react'

// function NameList() {

//     const names = ["Sherjeel","Momin","Tanya"]
//     const nameList =  names.map(function (name){
//         return <h2>{name}</h2>
//     })

//   return (
//     <div>{nameList}</div>
//   )
// }

// export default NameList
