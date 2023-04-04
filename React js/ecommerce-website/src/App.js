import './App.css';
import {useState} from 'react'
function App() {

  const [screen, setScreen] = useState(0)

  const myName = "Shiva kumar"
  const date = new Date()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const updateTime = () => {
      console.log("update the time")
      setScreen(1)
  }
  return (
    <div>
      <h1>My Name is {myName} </h1>
      <p>Iam a front end Developer - {year} </p>
      <h3>Present time - {hours} : {minutes} : {seconds} </h3>
      <button onClick = {updateTime} >Update time</button>
    </div>
  );
}

export default App;
