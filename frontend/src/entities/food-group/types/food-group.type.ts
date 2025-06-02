import { FoodType } from "@entities/food";

export type FoodGroupType = {
  id: string
  name: string
  foods: FoodType[]
}