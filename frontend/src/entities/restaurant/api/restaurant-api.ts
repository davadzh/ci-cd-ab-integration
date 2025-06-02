import { axiosInstance } from "@shared/config/api/axios-instance.ts";

export const restaurantApi = {
  getRestaurantList: async () => {
    return await axiosInstance.get('/restaurant')
  }
}