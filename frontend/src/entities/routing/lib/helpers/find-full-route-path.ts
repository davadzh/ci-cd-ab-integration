import { Routes, RoutesEnum } from "@entities/routing";
import { RouteDescriptor } from "@entities/routing/types/route-descriptor.ts";

export const findFullRoutePath = (
  routeId: RoutesEnum,
  parentPath = '',
  routes: Record<string, RouteDescriptor<RoutesEnum>> = Routes,
): string => {
  for (const route of Object.values(routes)) {
    const fullPath = parentPath ? `${parentPath}/${route.path}` : route.path

    if (route.id === routeId) {
      return fullPath
    }

    if (route.childRoutes && Object.keys(route.childRoutes).length > 0) {
      const childPath = findFullRoutePath(routeId, fullPath, route.childRoutes)
      if (childPath !== Routes[RoutesEnum.NOT_FOUND].path) {
        return childPath
      }
    }
  }

  return Routes[RoutesEnum.NOT_FOUND].path
}
