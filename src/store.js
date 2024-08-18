import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/counterSlice.js"
import cartReducer from "./slices/cartSlice.js"
// import counterSlice from './slices/counterSlice.js'

export const store = configureStore({
  reducer: {
    'counter': counterReducer,
    'cart': cartReducer
  },
})