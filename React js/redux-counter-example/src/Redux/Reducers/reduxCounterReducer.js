import { DECREMENT_COUNT, INCREMENT_COUNT } from "../Types/counterTypes"


export const counterStoreReducer = (state = {count : 12} ,action) => {
  switch(action.type){
    case INCREMENT_COUNT : {
      return {
        ...state,
        count : state.count + 1
      }
    }
    case DECREMENT_COUNT : {
      return {
        ...state,
        count : state.count - action.payload
      }
    }
    default : {
      return state
    }
  }
}