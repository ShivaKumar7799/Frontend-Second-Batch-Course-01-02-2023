import React from 'react'
import PropsChild from './PropsChild'

function PropsParent() {
  const buttonTexts = ["Increment", "Decrement", "Delete", "Add"]
  return (
    <div>
      <h1>PropsParent</h1>
       <div style={{display : "flex", columnGap : "10px"}} >
        {/* <PropsChild buttonText = "Increment" />
        <PropsChild buttonText = "Decrement" />
        <PropsChild buttonText = "Delete" /> */}
        {buttonTexts.map((item,index) => <PropsChild buttonText = {item} buttonIndex = {index + 1} name = "shiva" /> )}
       </div>
    </div>
  )
}

export default PropsParent