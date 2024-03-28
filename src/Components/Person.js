import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>
        I am {person.name} . age {person.age} . I am skilled in {person.skill}
      </h2>
    </div>
  )
}

export default Person
