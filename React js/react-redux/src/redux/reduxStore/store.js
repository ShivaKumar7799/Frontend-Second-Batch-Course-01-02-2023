import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterReducer'
import { userReducer } from '../reducers/userReducer'

const store = configureStore({
  reducer : {
    counter : counterReducer,
    user : userReducer
  }
})

export default store