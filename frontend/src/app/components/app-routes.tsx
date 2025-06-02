import { Route, Routes as ReactRoutes } from 'react-router-dom'
import { findRouteConfig, RoutesEnum } from '@entities/routing'
import { AuthPage } from '@pages/auth-page'
import { MenuPage } from "@pages/menu-page";
import { NotFoundPage } from "@pages/not-found-page";
import { CartPage } from "@pages/cart-page";
import { RoutesStyled } from "@app/styled-components/routes.styled.ts";
import { AuthSucceedPage } from "@pages/auth-succeed-page";
import { RestaurantsPage } from "@pages/restaurants-page";

export const AppRoutes = () => {
  return (
    <RoutesStyled>
      <ReactRoutes>
        <Route path={findRouteConfig(RoutesEnum.SIGN_IN).path} Component={AuthPage}/>
        <Route path={findRouteConfig(RoutesEnum.AUTH_SUCCEED).path} Component={AuthSucceedPage}/>
        <Route path={findRouteConfig(RoutesEnum.RESTAURANTS).path} Component={RestaurantsPage}/>
        <Route path={findRouteConfig(RoutesEnum.MENU).path} Component={MenuPage}/>
        <Route path={findRouteConfig(RoutesEnum.CART).path} Component={CartPage}/>
        <Route path={'*'} Component={NotFoundPage}/>
      </ReactRoutes>
    </RoutesStyled>
  )
}
