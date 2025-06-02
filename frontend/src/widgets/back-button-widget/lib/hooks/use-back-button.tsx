import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { findRouteIdByPath, Routes, RoutesEnum } from "@entities/routing";
import { BackButton } from "@widgets/back-button-widget/components/back-button.tsx";

export const useBackButton = () => {
  const { pathname } = useLocation()
  const [backPath, setBackPath] = useState<string | null>(null)

  useEffect(() => {
    const routeId = findRouteIdByPath(pathname)

    if (!routeId) {
      setBackPath(null)
      return
    }

    switch (routeId as RoutesEnum) {
      case RoutesEnum.MENU:
        setBackPath(Routes[RoutesEnum.RESTAURANTS].path)
        break
      case RoutesEnum.CART:
        setBackPath(Routes[RoutesEnum.MENU].path)
        break;
      default:
        setBackPath(null)
        break;
    }
  }, [pathname]);

  if (!backPath) {
    return null
  }

  return <BackButton path={backPath}/>
}