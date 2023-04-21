import React, {memo} from 'react'

function Counter({count, setCount}) {
  console.log("counter component rendered")
  return (
    <div>
      <h1>Counter : {count} </h1>
      <button onClick={() => setCount(count + 1)} >Inc</button>
    </div>
  )
}

export default memo(Counter)