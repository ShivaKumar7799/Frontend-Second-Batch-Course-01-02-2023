import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile/Profile';
import Counter from './Components/useState/Counter';
import ScoreCounter from './Components/useState/ScoreCounter';

function App() {
  
  return (
    <div className='score-board' >
      {/* <Profile /> */}
      {/* <Counter /> */}
      <div>
        <h1>India</h1>
        <ScoreCounter />
      </div>
      <div>
        <h1>Australia</h1>
        <ScoreCounter />
      </div>
    </div>
  );
}

export default App;
