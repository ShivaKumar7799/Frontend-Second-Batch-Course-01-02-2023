import React from 'react'
import { useSelector } from 'react-redux'

function ShowScore() {
  const Counter = useSelector(state => state.counter)
  return (
    <div>
      <h1>Score : {Counter.counterValue} </h1>
    </div>
  )
}

export default ShowScore