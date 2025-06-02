import { RouteDescriptor } from "@entities/routing/types/route-descriptor"
import { Routes, RoutesEnum } from "@entities/routing";

export const findRouteIdByPath = (
  targetPath: string,
  parentPath = '',
  routes: Record<string, RouteDescriptor<RoutesEnum>> = Routes,
): RoutesEnum | null => {
  for (const route of Object.values(routes)) {
    const fullPath = parentPath ? `${parentPath}/${route.path}` : route.path

    if (fullPath === targetPath) {
      return route.id
    }

    if (route.childRoutes && Object.keys(route.childRoutes).length > 0) {
      const childId = findRouteIdByPath(targetPath, fullPath, route.childRoutes)
      if (childId !== null) {
        return childId
      }
    }
  }

  return null
}
