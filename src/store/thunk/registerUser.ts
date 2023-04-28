import { UserService } from '../../services/LoginUser'
import { createAsyncThunk } from '@reduxjs/toolkit'
export type UserLogin = {
  email: string
  password: string
  username: string
}

export const registerUserThunk = createAsyncThunk(
  'registration',
  async (payload: UserLogin, thunkAPI) => {
    try {
      const response = await UserService.registration(
        payload.email,
        payload.password,
        payload.username
      )
      console.log(response)
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось зарегистрироваться')
    }
  }
)
