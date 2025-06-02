import { RolesEnum } from "@entities/user";

export interface RouteDescriptor<TRoute> {
  id: TRoute
  path: string
  roles: RolesEnum[]
  noAccessRouteId?: TRoute
  childRoutes: Record<string, RouteDescriptor<TRoute>>
}
