import { Routes, RoutesEnum } from "@entities/routing";
import { RouteDescriptor } from "@entities/routing/types/route-descriptor.ts";

export const findRouteConfig = (
  routeId: RoutesEnum,
  routes: Record<RoutesEnum, RouteDescriptor<RoutesEnum>> = Routes,
): RouteDescriptor<RoutesEnum> => {
  for (const route of Object.values(routes)) {
    if (route.id === routeId) {
      return route
    }

    if (route.childRoutes && Object.keys(route.childRoutes).length > 0) {
      const childRoute = findRouteConfig(routeId, route.childRoutes)
      if (childRoute.id !== Routes[RoutesEnum.NOT_FOUND].id) {
        return childRoute
      }
    }
  }

  return Routes[RoutesEnum.NOT_FOUND]
}
