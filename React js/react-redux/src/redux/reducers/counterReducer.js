import  {INCREMENT_COUNTER, DECREMENT_COUNTER } from '../types/counterTypes'

function counterReducer(state = {count : 0},action){
  switch(action.type){
    case INCREMENT_COUNTER : {
      return {
        ...state,
        count : state.count + 1
      }
    }
    case DECREMENT_COUNTER : {
      return {
        ...state,
        count : state.count - 1
      }
    }
    default : {
      return state
    }
  }
}

export default counterReducer