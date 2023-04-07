import React from 'react'
import ScoreCounter from './ScoreCounter'
import Counter from './Counter'
import "../../App.css"
import Forms from './Forms'
import DynamicForms from './DynamicForms'

function UseStateMain() {
  return (
    <div  >
      {/* <Counter />
        <div className='score-board' >
            <div>
            <h1>India</h1>
            <ScoreCounter />
          </div>
          <div>
            <h1>Australia</h1>
            <ScoreCounter />
          </div>
        </div> */}
        {/* <Forms /> */}
        <DynamicForms />
    </div>
  )
}

export default UseStateMain