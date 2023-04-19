import './App.css';
import Profile from './Components/Profile/Profile';
// import Counter from './Components/useState/Counter';
import ScoreCounter from './Components/useState/ScoreCounter';
import UseStateMain from './Components/useState/useStateMain';
import Draggable from './Components/Drag and Drop/Draggable';
import RootStackDrag from './Components/Drag and Drop/RootStackDrag';
import SimpleDragDrop from './Components/Drag and Drop/SimpleDragDrop';
import DragInDiv from './Components/Drag and Drop/DragInDiv';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Todolist from './pages/Todolist';
import Counter from './pages/Counter'
import { createContext, useState } from 'react';

export const AppMainState = createContext()

function App() {
  const [count, setCount] = useState(0)
  const appMainStateValues = {
    count : count,
    setCount : setCount,
    tech : "React Js"
  }
  return (
    <div>
      <AppMainState.Provider value = {appMainStateValues} >
        <BrowserRouter>
          <Link to ="/counter">Counter Page</Link>  &nbsp;  &nbsp;
          <Link to ="/todolist">Todos Page</Link>
          <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path ="/counter" element = {<Counter />} />
            <Route path="/todolist" element = {<Todolist />} />
          </Routes>
        </BrowserRouter>
        {/* <Profile /> */}
        {/* <UseStateMain /> */}
        {/* <h1>React Drag and Drop</h1> */}
        {/* <Draggable /> */}
        {/* <RootStackDrag /> */}
        {/* <SimpleDragDrop /> */}
        {/* <DragInDiv /> */}
      </AppMainState.Provider>
    </div>
  );
}

export default App;
