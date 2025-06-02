import { RestaurantType } from "@entities/restaurant/types/restaurant.type.ts";

export const mapRestaurantDtoToRestaurant = () => {
  return (foodGroupDto: any): RestaurantType => {
    return {
      id: foodGroupDto.id,
      name: foodGroupDto.name,
    };
  };
}