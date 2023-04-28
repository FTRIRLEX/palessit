import { User } from '../../types/User';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { fetchUser } from '../thunk/fetchUser'

type Response = { status: number; message: string }
type CurrentUser = { user: User; isLoading: boolean; response: Response }
const initialState: CurrentUser = {
  user: { user: {email: "", username: ""} },
  isLoading: false,
  response: { status: 0, message: '' },
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logoutCurrentUser(state) {
      state.user = { user: {email: "", username: ""} }
      state.response = {
        status: 0,
        message: '',
      }
    },
  },
  extraReducers: {
    [fetchUser.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchUser.fulfilled.type]: (
      state,
      action: PayloadAction<AxiosResponse<User>>
    ) => {
      console.log(action.payload.data.user)
      state.user.user.email = action.payload.data.user.email
      state.user.user.username = action.payload.data.user.username
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    [fetchUser.rejected.type]: (
      state,
      action: PayloadAction<AxiosResponse<User>>
    ) => {
      state.isLoading = true
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  },
})
export default loginSlice.reducer
