import React, {useState} from 'react'

function ScoreCounter() {
  const [score, setScore] = useState(0)
  const [wickets, setWicktes] = useState(0)
  // let score = 275;
  // const wickets = 4;
  const increseScoreByOne = () => {
    setScore(score + 1)
  }
  const increaseScoreByFour = () => {
    setScore(score + 4)
  }
  const increaseScoreBySix = () => {
    setScore(score + 6)
  }
  const increseScoreByThree = () => {
    setScore(prevScore => prevScore + 1)
    setScore(prevScore => prevScore + 1)
    setScore(prevState => prevState + 1)
  }
  const increseScoreByTwo = () => {
    setScore(score + 2)
  }
  const increaseWickets = () => {
    if(wickets < 10){
      setWicktes(wickets + 1)
    } else {
      alert("game is over")
    }
  }
  return (
    <div>
      <h1> {score}/{wickets} </h1>
      {wickets >= 10 ? <></> : <div> <div>
        <h2>Runs Buttons:</h2>
        <button  onClick={increseScoreByOne} >+1</button>
        <button onClick={increseScoreByTwo} >+2</button>
        <button onClick={increseScoreByThree} >+3</button>
        <button onClick={increaseScoreByFour} >+4</button>
        <button onClick={increaseScoreBySix} >+6</button>
      </div>
      <div>
        <h2>Wicktes Button</h2>
        <button onClick={increaseWickets} > Increase Wicket</button>
      </div> </div> }
    </div>
  )
}

export default ScoreCounter