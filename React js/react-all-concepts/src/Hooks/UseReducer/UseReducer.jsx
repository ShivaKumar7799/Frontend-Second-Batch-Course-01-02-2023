import React, { useReducer } from 'react'

const reducer = (state,action) => {
    switch(action.type){
      case "addRuns" : {
        return {
          ...state,
          totalScore : state.totalScore + action.payload,
          bowlerRuns : state.bowlerRuns + action.payload,
          playerScore : state.playerScore + action.payload
        }
      }
      case "wicket" : {
        return {
          ...state,
          totalWickets : state.totalWickets + action.payload,
          bowlerWicktes : state.bowlerWicktes + action.payload
        }
      }
      case "extras" : {
        return {
          ...state,
          extras : state.extras + action.payload,
          bowlerRuns : state.bowlerRuns + action.payload,
          totalScore : state.totalScore + action.payload
        }
      }
      case "ballComplete" : {
        return {
          ...state,
          balls : state.balls + action.payload
        }
      }
       default : {
        return state
       }
    }
}

function UseReducer() {
  const initialReducerState = {
    totalScore : 0,
    totalWickets : 0,
    balls : 0,
    playerScore : 0,
    extras : 0,
    bowlerWicktes : 0,
    bowlerRuns : 0
  }
  const [state, Dispatch] = useReducer(reducer,initialReducerState)
  return (
    <div> Learning UseReducer 
      <h1>Cricket Score</h1>
      <h2>Ind : {state.totalScore}/{state.totalWickets} , overs : {parseInt(state.balls / 6)} . {state.balls % 6 } </h2>
      <h2>Player 5 : {state.playerScore} </h2>
      <h3>Boweler : {state.bowlerRuns}/{state.bowlerWicktes}, {parseInt(state.balls / 6)} . {state.balls % 6 }  Extras : {state.extras}</h3>
      <button onClick={() => Dispatch({type : "addRuns", payload : 1})} >1 Run</button>
      <button onClick={() => Dispatch({type : "addRuns", payload : 2})} >2 Run</button>
      <button onClick={() => Dispatch({type : "addRuns", payload : 3})} >3 Run</button>
      <button onClick={() => Dispatch({type : "addRuns", payload : 4})} >4 Run</button>
      <button onClick={() => Dispatch({type : "addRuns", payload : 6})} >6 Run</button>

      <div>
        <button onClick={() => Dispatch({type: "wicket", payload : 1})} >Wicket</button>
        <button onClick = {() => Dispatch({type : "extras", payload : 1})} >Wide</button>
        <button onClick={() => Dispatch({type : "ballComplete", payload : 1})} >Ball Completed</button>
      </div>
    </div>
  )
}

export default UseReducer

