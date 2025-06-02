import { RoutesEnum } from "../enums/routes.enum.ts";
import { RouteDescriptor } from "../types/route-descriptor.ts";
import { RolesEnum } from "@entities/user";

export const Routes: Record<string, RouteDescriptor<RoutesEnum>> = {
  [RoutesEnum.SIGN_IN]: {
    id: RoutesEnum.SIGN_IN,
    path: '/sign-in',
    roles: [RolesEnum.GUEST],
    noAccessRouteId: RoutesEnum.RESTAURANTS,
    childRoutes: {},
  },
  [RoutesEnum.AUTH_SUCCEED]: {
    id: RoutesEnum.AUTH_SUCCEED,
    path: '/auth-succeed',
    roles: [RolesEnum.GUEST],
    noAccessRouteId: RoutesEnum.RESTAURANTS,
    childRoutes: {},
  },
  [RoutesEnum.RESTAURANTS]: {
    id: RoutesEnum.RESTAURANTS,
    path: '/',
    roles: [RolesEnum.USER],
    noAccessRouteId: RoutesEnum.SIGN_IN,
    childRoutes: {},
  },
  [RoutesEnum.MENU]: {
    id: RoutesEnum.MENU,
    path: '/menu',
    roles: [RolesEnum.USER],
    noAccessRouteId: RoutesEnum.SIGN_IN,
    childRoutes: {},
  },
  [RoutesEnum.CART]: {
    id: RoutesEnum.CART,
    path: '/cart',
    roles: [RolesEnum.USER],
    noAccessRouteId: RoutesEnum.SIGN_IN,
    childRoutes: {},
  },
  [RoutesEnum.NOT_FOUND]: {
    id: RoutesEnum.NOT_FOUND,
    path: '/not-found',
    roles: [RolesEnum.USER, RolesEnum.GUEST],
    childRoutes: {},
  },
}
