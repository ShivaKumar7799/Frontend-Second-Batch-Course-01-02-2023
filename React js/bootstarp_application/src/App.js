import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Homepage from './Components/Homepage';
import Grid from './Components/Grid';
import Typography from './Components/Typography';
import Table from './Components/Table';
import Images from './Components/Images';
import Alerts from './Components/Alerts';
import Buttons from './Components/Buttons';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='row container-fluid bg-dark py-3' >
        <div className='col text-center' ><Link className='text-decoration-none text-white' to="/">Home</Link></div>
        <div className='col text-center' ><Link className='text-decoration-none text-white' to ="/grid" >Grid</Link></div>
        <div className='col text-center' ><Link className='text-decoration-none text-white' to="/typography">TypoGraphy</Link></div>
        <div className='col text-center' ><Link className='text-decoration-none text-white' to="/table">Table</Link></div>
        <div className='col text-center' ><Link className='text-decoration-none text-white' to="/images">Images</Link></div>
        <div className='col text-center' ><Link className='text-decoration-none text-white' to="/alerts">Alerts</Link></div>
        <div className='col text-center' ><Link className='text-decoration-none text-white' to="/buttons">Buttons</Link></div>
      </div>
        <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path ="/grid" element = {<Grid />} />
          <Route path ="/typography" element = {<Typography />} />
          <Route path ="/table" element = {<Table />} />
          <Route path ="/images" element = {<Images />} />
          <Route path="/alerts" element = {<Alerts />} />
          <Route path ="/buttons" element ={<Buttons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
