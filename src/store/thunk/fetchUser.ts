import { UserService } from '../../services/LoginUser';
import { createAsyncThunk } from '@reduxjs/toolkit';
export type UserLogin = {
  email: string;
  password: string;
};

export const fetchUser = createAsyncThunk(
  'login',
  async (payload: UserLogin, thunkAPI) => {
    try {
      const response = await UserService.login(payload.email, payload.password);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue('не удалось залогиниться ');
    }
  }
);
