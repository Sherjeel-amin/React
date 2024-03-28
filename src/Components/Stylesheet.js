import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
  const className = props.class
  return (
    <div>
      <h1 className={className}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet
