import { configureStore } from '@reduxjs/toolkit'
import users from './user'

const store = configureStore({
  users,
})

export default store
