import React from 'react'
import {memo} from 'react'

function Counter({count, setCount}) {
  console.log("counter component rendered")
  return (
    <div>
      <h1>Counter Value : {count} </h1>
      <button onClick={() => setCount(count + 1)} >Inc</button>
    </div>
  )
}

export default memo(Counter)