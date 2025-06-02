import { Food, FoodType } from "@entities/food";
import { AddToCart } from "@features/add-to-cart";

interface FoodWidgetProps {
  food: FoodType;
}

export const FoodWidget = (props: FoodWidgetProps) => {
  const { food } = props;

  return (
    <Food
      food={food}
      actionNode={<AddToCart foodId={food.id} />}
    />
  );
};
