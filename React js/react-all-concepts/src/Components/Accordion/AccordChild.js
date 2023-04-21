import React, {useState} from 'react'

function AccordChild(props) {
  return (
    <div>
      <div>
        <h3> { props.item.question} {!props.item.showAnswer ?<button onClick={() => {props.updateAccordBlocks(props.item.id, true)}} >+</button> : <button onClick={() => {props.updateAccordBlocks(props.item.id, false)}} >-</button>}   </h3>
        {props.item.showAnswer && <p> {props.item.answer} </p>}
      </div>
    </div>
  )
}

export default AccordChild