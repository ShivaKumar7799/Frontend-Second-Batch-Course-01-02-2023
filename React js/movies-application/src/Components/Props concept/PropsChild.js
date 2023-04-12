import React from 'react'

function PropsChild(props) {
  return (
    <>
      <button> {props.buttonIndex}. {props.buttonText} {props.name} </button>
    </>
  )
}

export default PropsChild