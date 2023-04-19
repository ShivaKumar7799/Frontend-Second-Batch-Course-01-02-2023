import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppMainState } from '../App'
function Counter() {
  const {count, setCount} = useContext(AppMainState)
  return (
    <div>
      <button onClick={() => setCount(count + 1)} >+</button> : {count}
    </div>
  )
}

export default Counter