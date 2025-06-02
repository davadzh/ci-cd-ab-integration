import { ComponentType, JSX } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { findFullRoutePath, findRouteConfig, RoutesEnum } from "@entities/routing";
import { selectUser } from "@entities/user";

export function withProtectedRoute<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<P>,
  routeId: RoutesEnum,
): ComponentType<P> {
  return function ProtectedComponent(props: P) {
    const userRole = useSelector(selectUser).role
    const route = findRouteConfig(routeId)

    if (!route.noAccessRouteId) {
      return <WrappedComponent {...props} />
    }

    if (!route.roles.includes(userRole)) {
      return <Navigate to={findFullRoutePath(route.noAccessRouteId)} replace/>
    }

    return <WrappedComponent {...props} />
  }
}
