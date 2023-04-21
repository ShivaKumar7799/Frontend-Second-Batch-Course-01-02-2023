import React, {memo} from 'react'

function Todolist({randomTodo, updateTodos , setCount}) {
  console.log("todolist component rendered")
  return (
    <div>
      {randomTodo.map((item,index) => <h3 key={index} >{item}</h3> )}
      <button onClick={() => updateTodos( Math.random() )} >Add Random</button>
      <button onClick={() => setCount((prev) => prev + 1 )} >Inc</button>
    </div>
  )
}

export default memo(Todolist)