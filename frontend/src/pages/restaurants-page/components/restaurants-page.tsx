import { RestaurantsPageStyled } from "@pages/restaurants-page/styled-components/restaurants-page.styled.ts";
import { useRestaurantList } from "@entities/restaurant";
import { useNavigate } from "react-router-dom";
import { findFullRoutePath, RoutesEnum, withProtectedRoute } from "@entities/routing";

export const RestaurantsPage = withProtectedRoute(() => {
  const { isRestaurantListLoading, restaurantList } = useRestaurantList()
  const navigate = useNavigate()

  const goToRestaurant = (restaurantId: string) => {
    navigate(findFullRoutePath(RoutesEnum.MENU) + "?restaurantId=" + restaurantId)
  }

  if (isRestaurantListLoading) {
    return null
  }

  return (
    <RestaurantsPageStyled>
      <div>
        <div>Выберите ресторан</div>

        {restaurantList.map((restaurant) => (
          <button onClick={() => goToRestaurant(restaurant.id)}>{restaurant.name}</button>
        ))}
      </div>
    </RestaurantsPageStyled>
  );
}, RoutesEnum.RESTAURANTS);
