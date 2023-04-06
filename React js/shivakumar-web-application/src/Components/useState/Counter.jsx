import React, { useState } from 'react'

function Counter() {
  // let count = 123;
  const [count, setCount] = useState(100)

  const IncreaseCount = () => {
    setCount(prevState => prevState + 1)
    setCount(prevState => prevState + 1)
    setCount(prevState => prevState + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  console.log("counter component rendered")

  return (
    <div>
      <button onClick={IncreaseCount} > + 3</button>
      {count}
      <button onClick={decrementCount} > - </button>
      <button onClick={() => setCount(count + 100)} > + 100</button>
      <button onClick={() => setCount(count + 500)} > + 500</button>
    </div>
  )
}

export default Counter