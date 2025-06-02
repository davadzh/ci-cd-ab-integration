import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@app/redux/store/main-store.ts'
import { CartItemType } from "@entities/cart/types/cart-item.type.ts";

interface CartState {
  cartItems: CartItemType[]
}

const initialState: CartState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItemType[]>) => {
      state.cartItems = action.payload
    },
    addCartItem: (state, action: PayloadAction<CartItemType>) => {
      state.cartItems.push(action.payload)
    },
    removeCartItem: (state, action: PayloadAction<{cartItemId: string}>) => {
      state.cartItems = state.cartItems.filter(c => c.id !== action.payload.cartItemId)
    },
  },
})

export const { setCartItems, addCartItem, removeCartItem } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.cartItems

export default cartSlice.reducer
