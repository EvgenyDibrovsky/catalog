// src/redux/auth/authSlice.js
import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
  register,
  login,
  logout,
  fetchCurrentUser,
  resetPassword,
  refreshToken,
} from './auth-operations'

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isAuthenticated: false, // добавьте это
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, state => {
        state.isLoading = false
        state.error = null
        state.token = null
        state.user = { name: '', email: '' }
        state.isAuthenticated = false // обновляем состояние
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false
        state.error = null
        state.token = null
        state.user = { name: '', email: '' }
        state.isAuthenticated = false // добавьте это
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.user = payload
        state.isFetchingCurrentUser = false
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isFetchingCurrentUser = false
      })
      .addCase(resetPassword.pending, state => {
        state.isLoading = true
      })
      .addCase(resetPassword.fulfilled, state => {
        state.isLoading = false
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(refreshToken.fulfilled, (state, { payload: { token } }) => {
        state.token = token
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          fetchCurrentUser.pending,
          resetPassword.pending
        ),
        state => {
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, { payload: { user, token } }) => {
          state.isLoading = false
          state.error = null
          state.token = token
          state.user = user
          state.isAuthenticated = true
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          fetchCurrentUser.rejected,
          resetPassword.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false
          state.error = payload // payload теперь является строкой
        }
      )
  },
})

export default authSlice.reducer
