import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  const activePlayer = state.activePlayer
  switch (action.type) {
    case "addRun": {
      return {
        ...state,
        score: state.score + action.payload,
        currentPlayerScore: state.currentPlayerScore + action.payload,
        bowlerScore : state.bowlerScore + action.payload,
        overBalls : state.overBalls + 1
      };
    }
    case "wicketFallen": {
      return {
        ...state,
        wickets: state.wickets + 1,
        bowlerTakenWickets : state.wickets + 1,
        [state.overBalls] : state.overBalls + 1,
        activePlayer : state.wickets + 2
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

function ComplexUseReducer() {
  const initialValue = {
    score: 0,
    wickets: 0,
    currentPlayerScore: 0,
    runnerPlayerScore: 0,
    bowlerScore: 0,
    bowlerTakenWickets: 0,
    overBalls : 0,
    activePlayer : 0,
    runnerPlayer : 1
  };
  const [state, Dispatch] = useReducer(reducer, initialValue);

  const players = ["Sehwag", "Gambhir", "Sachin", "Raina", "Yuvraj Singh", "Dhoni"]
  return (
    <div>
      {console.log(state)}
      <h1>Cricket Score:</h1>
      <h2>
       Ind : {state.score}/{state.wickets}, Overs : {parseInt(state.overBalls/6)} : {state.overBalls % 6 }
      </h2>
      <h3>
        {players[state.activePlayer]} <sup>*</sup> : {state.currentPlayerScore} , {players[state.runnerPlayer]} :
        {state.runnerPlayerScore}, Bowler : {state.bowlerScore}/
        {state.bowlerTakenWickets}
      </h3>
      <button onClick={() => Dispatch({ type: "addRun", payload: 1 })}>
        {" "}
        1 Runs{" "}
      </button>
      <button onClick={() => Dispatch({ type: "addRun", payload: 2 })}>
        {" "}
        2 Runs{" "}
      </button>
      <button onClick={() => Dispatch({ type: "addRun", payload: 3 })}>
        {" "}
        3 Runs{" "}
      </button>
      <button onClick={() => Dispatch({ type: "addRun", payload: 4 })}>
        {" "}
        4 Runs{" "}
      </button>
      <button onClick={() => Dispatch({ type: "addRun", payload: 6 })}>
        {" "}
        6 Runs{" "}
      </button>
      <button onClick={() => Dispatch({ type: "wicketFallen" })}>
        {" "}
        Add Wicket{" "}
      </button>
    </div>
  );
}

export default ComplexUseReducer;
