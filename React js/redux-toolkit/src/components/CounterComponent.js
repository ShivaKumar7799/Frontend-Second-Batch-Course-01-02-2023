import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, addOneRun, addTwoRuns, addThreeRuns , addWicket,addDynamicRuns} from '../features/counterSlice'

function CounterComponent() {
  const counter = useSelector((state) => state.counter )
  const dispatch = useDispatch()
  const scoreButtons = [
    {
      text : "1 Run",
      addScore : 1
    },
    {
      text : "2 Run",
      addScore : 2
    },
    {
      text : "3 Run",
      addScore : 3,
      
    },
    {
      text : "4 Run",
      addScore : 4
    },
    {
      text : "6 Run",
      addScore : 6
    },
  ]
  return (
    <div>
      <h2>Counter Component</h2>
      <p>Counter value using Redux Toolkit : {counter.counterValue} / {counter.wickets} </p>
      <button onClick={() => dispatch(increment()) } >Inc</button>
      <button onClick={() => dispatch(decrement(5)) } >Dec</button>
      {/* <button onClick={() => dispatch(addOneRun())} > 1 Run</button>
      <button onClick={() => dispatch(addTwoRuns())} > 2 Run</button>
      <button onClick={() => dispatch(addThreeRuns())} > 3 Run</button> */}

      
      {scoreButtons.map((item,index) => <button onClick={() => dispatch(addDynamicRuns(item))} > {item.text} </button> )}
      <button onClick={() => dispatch(addWicket())} >wicket</button>
      <h2>No of Fours : {counter.fours} , Sixes : {counter.sixes} </h2>
    </div>
  )
}

export default CounterComponent