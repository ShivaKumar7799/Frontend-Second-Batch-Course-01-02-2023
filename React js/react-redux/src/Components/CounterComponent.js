import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter,decrementCounter } from '../redux/actions/counterActions'

function CounterComponent(props) {
  const {counter, incrementCounter, decrementCounter} = props
  return (
    <div>CounterComponent : {counter.count} df
      <button onClick={incrementCounter} >inc</button>
    </div>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)