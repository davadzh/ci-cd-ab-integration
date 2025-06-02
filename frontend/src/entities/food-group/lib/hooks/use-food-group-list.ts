import { foodGroupApi } from "@entities/food-group/api/food-group-api.ts";
import { useEffect, useState } from "react";
import { FoodGroupType } from "@entities/food-group";
import { mapFoodGroupDtoToFoodGroup } from "@entities/food-group/lib/mappers/map-food-group-dto-to-food-group.ts";

export const useFoodGroupList = (restaurantId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [foodGroupList, setFoodGroupList] = useState<FoodGroupType[]>([]);

  const getFoodGroupList = async (restaurantId: string) => {
    try {
      const {data} = await foodGroupApi.getByRestaurantId(restaurantId);
      setFoodGroupList(data.map(mapFoodGroupDtoToFoodGroup()));
    } catch (e) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void getFoodGroupList(restaurantId)
  }, []);

  return {
    isLoading,
    foodGroupList,
  }
}