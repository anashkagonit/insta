import { configureStore } from '@reduxjs/toolkit'
import users from './user'

const store = configureStore({
  reducer: {
    users,
  },
})

export default store
