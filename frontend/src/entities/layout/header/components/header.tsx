import { HeaderStyled } from "@entities/layout/header/styled-components/header.styled.ts";
import { HeaderTitleStyled } from "@entities/layout/header/styled-components/header-title.styled.ts";
import { HeaderLogoStyled } from "@entities/layout/header/styled-components/header-logo.styled.ts";
import { useBackButton } from "@widgets/back-button-widget";
import { useSearchParams } from "react-router-dom";
import { useRestaurantList } from "@entities/restaurant";
import { useMemo } from "react";

export const Header = () => {
  const [searchParams] = useSearchParams();
  const restaurantId = searchParams.get("restaurantId") ?? "";

  const backButton = useBackButton()
  const { restaurantList } = useRestaurantList()

  const restaurant = useMemo(() => {
    return restaurantList.find((restaurant) => restaurant.id === restaurantId);
  }, [restaurantList.length, restaurantId])

  if (!restaurant) {
    return (
      <HeaderStyled>
        <div/>
        <HeaderLogoStyled>ONE MENU</HeaderLogoStyled>
      </HeaderStyled>
    )
  }

  return (
    <HeaderStyled>
      <HeaderTitleStyled>
        {backButton}
        <div>{restaurant.name}</div>
      </HeaderTitleStyled>

      <HeaderLogoStyled>ONE MENU</HeaderLogoStyled>
    </HeaderStyled>
  );
};
