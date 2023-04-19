import React, { memo } from 'react'

function Todos({todos, updateTodo}) {
  console.log("todos comoponent rendered")
  return (
    <div>
      <button onClick={() => updateTodo([...todos,Math.random()])} >Add Todo</button>
      {todos.map((item,index) => <div key={index} > {item} </div> )}
    </div>
  )
}

export default memo(Todos)