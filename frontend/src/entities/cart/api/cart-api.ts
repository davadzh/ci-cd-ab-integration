import { axiosInstance } from "@shared/config/api/axios-instance.ts";
import { CartItemType } from "@entities/cart/types/cart-item.type.ts";

export const cartApi = {
  getCartItems: async () => {
    return await axiosInstance.get<CartItemType[]>('/cart/get-items')
  },

  getCartItemsByRestaurantId: async (restaurantId: string) => {
    return await axiosInstance.get<CartItemType[]>('/cart/get-items-by-restaurant-id?restaurantId=' + restaurantId)
  },

  getCartItemsByFoodId: async (foodId: string) => {
    return await axiosInstance.get<CartItemType[]>('/cart/get-items-by-food-id?foodId=' + foodId)
  },

  addToCart: async (foodId: string) => {
    return await axiosInstance.post('/cart/add-item?foodId=' + foodId)
  },

  removeFromCart: async (foodId: string) => {
    return await axiosInstance.post('/cart/remove-item?foodId=' + foodId)
  }
}