import {connect} from 'react-redux'
import { incrementCount, decrementCount } from './Redux/Actions/counterActions';
import DisplayCounterValue from './components/DisplayCounterValue';

function App({counter,incrementCount,decrementCount}) {
  return (
   <div>
    <h1>React Redux </h1>
    <h2>Counter Value : {counter?.count} </h2>
    <button onClick={() => incrementCount()} >+</button>
    <button onClick={() => decrementCount(2)} >-</button>
    <DisplayCounterValue />
   </div>
  );
}

const mapStateToProps = (store) => {
   return {
     counter : store.counter
   }
}

const mapDispatchToProps = {
  incrementCount,
  decrementCount
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
