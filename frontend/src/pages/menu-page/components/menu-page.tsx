import { findFullRoutePath, RoutesEnum, withProtectedRoute } from "@entities/routing";
import { MenuPageStyled } from "@pages/menu-page/styled-components/menu-page.styled.ts";
import { FoodGroupWidget } from "@widgets/food-group-widget";
import { FoodGroupBarWidget } from "@widgets/food-group-bar-widget";
import { useMemo, useRef } from "react";
import { useFoodGroupList } from "@entities/food-group";
import { GoToCart } from "@features/go-to-cart";
import { Navigate, useSearchParams } from "react-router-dom";

export const MenuPage = withProtectedRoute(() => {
  const [searchParams] = useSearchParams();
  const restaurantId = searchParams.get("restaurantId") ?? "";
  console.log(restaurantId)

  const {isLoading, foodGroupList} = useFoodGroupList(restaurantId)

  const groupRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    groupRefs.current[id] = el;
  };

  const groupBar = useMemo(() => {
    return <FoodGroupBarWidget foodGroups={foodGroupList} groupRefs={groupRefs}/>
  }, [foodGroupList, groupRefs]);

  if (!restaurantId) {
    return <Navigate to={findFullRoutePath(RoutesEnum.RESTAURANTS)} replace />;
  }

  if (isLoading) {
    return null
  }

  return (
    <MenuPageStyled>
      {groupBar}
      {foodGroupList.map(fg => (
        <FoodGroupWidget
          foodGroup={fg}
          key={fg.id}
          ref={setRef(fg.id)}
        />
      ))}
      <GoToCart restaurantId={restaurantId} />
    </MenuPageStyled>
  );
}, RoutesEnum.MENU);
