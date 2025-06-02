import { FoodWidget } from "@widgets/food-widget";
import { FoodGroup, FoodGroupType } from "@entities/food-group";
import { forwardRef } from "react";

interface FoodGroupWidgetProps {
  foodGroup: FoodGroupType
}

export const FoodGroupWidget = forwardRef<HTMLDivElement, FoodGroupWidgetProps>((props, ref) => {
  const { foodGroup } = props;

  return (
    <FoodGroup
      ref={ref}
      foodGroupId={foodGroup.id}
      foodGroupName={foodGroup.name}
      foodNodes={foodGroup.foods.map(f => (
        <FoodWidget food={f} key={f.id}/>
      ))}
    />
  );
});
