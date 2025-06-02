import { findRouteConfig, RoutesEnum } from "@entities/routing";

export const asParentPath = (routeId: RoutesEnum) => {
  return findRouteConfig(routeId).path + '/*'
}
