import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  token: '',
  user: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isLoggedIn = payload.loggedIn
      state.token = payload.token
      state.user = payload.user
    }
  },
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer