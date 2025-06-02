import { FoodGroupStyled } from "@entities/food-group/styled-components/food-group.styled.ts";
import { FoodGroupNameStyled } from "@entities/food-group/styled-components/food-group-name.styled.ts";
import { FoodGroupGridStyled } from "@entities/food-group/styled-components/food-group-grid.styled.ts";
import { forwardRef, ReactNode } from "react";

interface FoodGroupProps {
  foodGroupId: string
  foodGroupName: string
  foodNodes: ReactNode[]
}

export const FoodGroup = forwardRef<HTMLDivElement, FoodGroupProps>((props, ref) => {
  const { foodGroupId, foodGroupName, foodNodes } = props;

  return (
    <FoodGroupStyled ref={ref} data-id={foodGroupId}>
      <FoodGroupNameStyled>{foodGroupName}</FoodGroupNameStyled>
      <FoodGroupGridStyled>
        {foodNodes}
      </FoodGroupGridStyled>
    </FoodGroupStyled>
  );
});
