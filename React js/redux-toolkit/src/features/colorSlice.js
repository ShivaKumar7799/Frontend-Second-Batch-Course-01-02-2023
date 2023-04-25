import { createSlice } from "@reduxjs/toolkit";


const colorSlice = createSlice({
  name : "color",
  initialState : {
    colorValue : ""
  },
  reducers : {
    changeColor : (state,action) => {
      state.colorValue = action.payload
    }
  }
})

export default colorSlice.reducer
export const {changeColor} = colorSlice.actions