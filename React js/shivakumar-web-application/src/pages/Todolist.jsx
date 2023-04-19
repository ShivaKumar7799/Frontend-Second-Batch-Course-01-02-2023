import React from 'react'
import { useContext } from 'react'
import { AppMainState } from '../App'
function Todolist() {
  const {tech, count,setCount} = useContext(AppMainState)
  return (
    <div>Todolist : {tech} : {count} <button onClick={() => setCount(count - 1)} >-</button> </div>
  )
}

export default Todolist