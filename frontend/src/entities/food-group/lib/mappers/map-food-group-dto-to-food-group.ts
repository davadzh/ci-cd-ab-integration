import { FoodGroupType } from "@entities/food-group";

export const mapFoodGroupDtoToFoodGroup = () => {
  return (foodGroupDto: any): FoodGroupType => {
    return {
      id: foodGroupDto.id,
      name: foodGroupDto.name,
      foods: foodGroupDto.foods.map((food: any) => ({
        id: food.id,
        name: food.name,
        description: food.description,
        price: food.price,
        imageUrl: food.photoUrl,
        quantity: food.quantity,
        unit: food.unit,
      })),
    };
  };
}