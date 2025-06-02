import { ReactNode } from "react";
import { FoodStyled } from "@entities/food/styled-components/food.styled.ts";
import FoodDefaultImage from '../assets/food-default.png'
import { FoodContentStyled } from "@entities/food/styled-components/food-content.styled.ts";
import { FoodContentFooterStyled } from "@entities/food/styled-components/food-content-footer.styled.ts";
import { FoodContentHeaderStyled } from "@entities/food/styled-components/food-content-header.styled.ts";
import { FoodType } from "@entities/food";

interface FoodProps {
  food: FoodType;
  actionNode: ReactNode;
}

export const Food = (props: FoodProps) => {
  const { food, actionNode } = props;

  return (
    <FoodStyled>
      {/*<img src={food.imageUrl ?? FoodDefaultImage} alt={food.name}/>*/}
      <img src={FoodDefaultImage} alt={food.name}/>

      <FoodContentStyled>
        <FoodContentHeaderStyled>
          <div>{food.name}</div>
          <div>{food.quantity}{food.unit}</div>
        </FoodContentHeaderStyled>
        
        <FoodContentFooterStyled>
          <div>{food.price}<span>₽</span></div>

          {actionNode}
        </FoodContentFooterStyled>
      </FoodContentStyled>
    </FoodStyled>
  );
};
