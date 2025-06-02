import { useEffect, useState } from "react";
import { RestaurantType } from "@entities/restaurant/types/restaurant.type.ts";
import { restaurantApi } from "@entities/restaurant/api/restaurant-api.ts";
import { mapRestaurantDtoToRestaurant } from "@entities/restaurant/lib/mappers/map-restaurant-dto-to-restaurant.ts";

export const useRestaurantList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [restaurantList, setRestaurantList] = useState<RestaurantType[]>([]);

  const getRestaurantList = async () => {
    try {
      const {data} = await restaurantApi.getRestaurantList();
      setRestaurantList(data.map(mapRestaurantDtoToRestaurant()));
    } catch (e) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void getRestaurantList()
  }, []);

  return {
    isRestaurantListLoading: isLoading,
    restaurantList,
  }
}