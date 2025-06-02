import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@entities/user/store/user-store.ts'
import cartReducer from '@entities/cart/store/cart-store.ts'

export const mainStore = configureStore({
  reducer: {
    // Slices
    user: userReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof mainStore.getState>
export type AppDispatch = typeof mainStore.dispatch
