import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentUserSliceReducer from './slice/loginSlice'
import registerUserasdasd from './slice/registerSlice'

const rootReducer = combineReducers({
  currentUserSliceReducer,
  registerUserasdasd,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
