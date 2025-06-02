import '../global-styles/index.css'
import { useSelector } from "react-redux";
import { selectAuthChecked } from "@entities/user";
import { AppRoutes } from "@app/components/app-routes.tsx";
import { HeaderWidget } from "@widgets/header-widget";
import { useAppInit } from "@app/lib/hooks/use-app-init.ts";

export const App = () => {
  useAppInit()

  const isAuthChecked = useSelector(selectAuthChecked)

  if (!isAuthChecked) {
    return null
  }

  return (
    <div>
      <HeaderWidget />
      {isAuthChecked ? <AppRoutes /> : <div>Loading...</div>}
    </div>
  );
};
