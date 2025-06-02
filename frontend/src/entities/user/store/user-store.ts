import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RolesEnum } from '../index.ts'
import { RootState } from '@app/redux/store/main-store.ts'
import { UserType } from '../types/user.type.ts'

interface AuthState {
  isAuthChecked: boolean
  user: UserType
}

const initialState: AuthState = {
  isAuthChecked: false,
  user: {
    role: RolesEnum.GUEST,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.isAuthChecked = true
      state.user = action.payload
    },
    clearUser: state => {
      state.isAuthChecked = true
      state.user = {
        role: RolesEnum.GUEST,
      }
    },
  },
})

export const { setUser, clearUser } = userSlice.actions

export const selectAuthChecked = (state: RootState) => state.user.isAuthChecked
export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
