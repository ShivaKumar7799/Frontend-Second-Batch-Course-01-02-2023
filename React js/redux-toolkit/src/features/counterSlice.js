import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name : "counter",
  initialState : {
    counterValue : 0,
    wickets : 0,
    fours : 0,
    sixes : 0
  },
  reducers : {
    increment : (state,action) => {
      state.counterValue = state.counterValue + 1
    },
    decrement : (state,action) => {
      state.counterValue = state.counterValue - action.payload
    },
    addOneRun : (state,action) => {
      state.counterValue = state.counterValue + 1
    },
    addTwoRuns : (state,action) => {
      state.counterValue = state.counterValue + 2
    },
    addThreeRuns : (state,action) => {
      state.counterValue = state.counterValue + 3
    },
    addDynamicRuns : (state,action) => {
      console.log(action.payload)
      state.counterValue = state.counterValue + action.payload.addScore
      if(action.payload.addScore === 4){
        state.fours = state.fours + 1
      }
      if(action.payload.addScore === 6){
        state.sixes = state.sixes + 1
      }
    },
    addWicket : (state,action) => {
      state.wickets = state.wickets + 1
    }
  }
})

export default counterSlice.reducer
export const {increment, decrement, addOneRun, addTwoRuns, addThreeRuns,addDynamicRuns,addWicket} = counterSlice.actions