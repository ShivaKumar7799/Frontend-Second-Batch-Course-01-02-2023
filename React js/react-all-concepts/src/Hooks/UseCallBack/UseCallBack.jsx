import React, {useState, useCallback, useMemo} from 'react'
import Counter from '../../Components/Counter/Counter'
import Todolist from '../../Components/Todolist/Todolist'

function UseCallBack() {
  const [count, setCount] = useState(0);
  const [randomTodo, setRandomTodo] = useState([])
  console.log("useCallback page")

  const updateTodos = useCallback((childTodo) => {
    setRandomTodo([...randomTodo, childTodo])
  }, [randomTodo])

  const todoCount = useMemo( () => calculateTodoCount(randomTodo) , [randomTodo] )

  return (
    <div>
      <h1>Learning  memo, useMemo, useCallback</h1>
      <h2>Todos Count : {todoCount} </h2>
      <Counter count = {count} setCount = {setCount} />
      <Todolist setCount = {setCount} randomTodo = {randomTodo} updateTodos = {updateTodos} />
    </div>
  )
}

export default UseCallBack

const calculateTodoCount = (todos) => {
  console.log("calc todo")
  let count = 0
  for(let i = 0 ; i < 1000000000 ; i++){
    count = count + 1
  }
  return todos.length
}