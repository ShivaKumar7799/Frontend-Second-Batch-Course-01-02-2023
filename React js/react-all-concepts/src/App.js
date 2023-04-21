import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Hooks from './Hooks/Hooks';
import NavBar from './Components/NavigationBar/NavBar';

import UseState from './Hooks/UseState/UseState';
import UseEffect from "./Hooks/UseEffect/UseEffect";
import UseRef from './Hooks/UseRef/UseRef'
import UseContext from "./Hooks/UseContext/UseContext";
import UseMemo from "./Hooks/UseMemo/UseMemo";
import UseCallBack from './Hooks/UseCallBack/UseCallBack';
import UseReducer from './Hooks/UseReducer/UseReducer'
import CustomHooks from './Hooks/CustomHooks/CustomHooks'

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="hooks" element = {<Hooks />} >
            <Route path ="useState" element = {<UseState />} />
            <Route path ="useEffect" element = {<UseEffect />} />
            <Route path ="useRef" element = {<UseRef />} />
            <Route path ="useContext" element = {<UseContext />} />
            <Route path ="useMemo" element = {<UseMemo />} />
            <Route path ="useCallBack" element = {<UseCallBack/>} />
            <Route path ="useReducer" element = {<UseReducer />} />
            <Route path ="customHooks" element = {<CustomHooks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
