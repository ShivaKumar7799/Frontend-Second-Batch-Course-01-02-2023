import { DECREMENT_COUNT, INCREMENT_COUNT } from "../Types/counterTypes"

export const incrementCount = (state) => {
  return {
    type : INCREMENT_COUNT,
  }
}

export const decrementCount = (value) => {
  return {
    type : DECREMENT_COUNT,
    payload : value
  }
}