import { configureStore} from '@reduxjs/toolkit'
import { counterStoreReducer } from '../Reducers/reduxCounterReducer'

export const store = configureStore({
  reducer : {
    counter : counterStoreReducer
  }
})