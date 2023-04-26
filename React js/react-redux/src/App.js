import React from "react";
import {connect } from "react-redux";
import { incrementCounter,decrementCounter } from "./redux/actions/counterActions";
import CounterComponent from "./Components/CounterComponent";
import UserComponent from "./Components/UserComponent";

function App(props) {
  const {counter,incrementCounter, decrementCounter} = props
  return (
   <div>
    Learning react redux
    CounterValue : {counter.count}
    <button onClick={incrementCounter} >Inc</button>
    <button onClick={decrementCounter} >Dec</button>
    <CounterComponent />
    <UserComponent />
   </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter : state.counter
  }
}

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
