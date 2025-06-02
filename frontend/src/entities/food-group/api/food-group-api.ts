import { axiosInstance } from "@shared/config/api/axios-instance.ts";

export const foodGroupApi = {
  getByRestaurantId: async (restaurantId: string) => {
    return await axiosInstance.get('/food-group?restaurantId=' + restaurantId)
  }
}