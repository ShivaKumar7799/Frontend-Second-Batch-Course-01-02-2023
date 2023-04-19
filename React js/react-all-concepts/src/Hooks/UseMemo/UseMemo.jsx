import React, { useCallback, useMemo, useState } from 'react'
import Counter from '../../Projects/Counter/Counter'
import Todos from '../../Projects/Todos/Todos'

function UseMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const updateTodo = (todo) => {
    setTodos(todo)
  }
  // const todosLengthCalculate = useMemo( () => todoCalc(todos), [todos])
  return (
    <div>
      {/* {todosLengthCalculate} */}
      <Counter count = {count} setCount = {setCount} />
      <Todos todos = {todos} updateTodo = {updateTodo} />
    </div>
  )
}

const todoCalc = (todos) => {
  let count = 0
  for(let  i = 0; i < 1000000000 ; i++){
    count = count + 1
  }
  return todos.length
}

export default UseMemo