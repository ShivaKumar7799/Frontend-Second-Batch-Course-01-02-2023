import { useSelector} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice';
import CounterComponent from './components/CounterComponent';
import ShowScore from './components/ShowScore';
import ChangeColor from './components/ChangeColor';
import colorSlice from './features/colorSlice';

export const reduxStore = configureStore({
  reducer : {
    counter : counterSlice,
    color : colorSlice
  }
})

function App() {
  // const [color,setColor] = useState("")


  const color = useSelector(state => state.color)

  return (
    
      <div style={{backgroundColor : color.colorValue}} >
        <h1>Learning Redux Toolkit</h1>
        <CounterComponent />
        <ShowScore />
        <ChangeColor 
        // color = {color}
        //  setColor = {setColor}
          />
      </div>
  );
}

export default App;
