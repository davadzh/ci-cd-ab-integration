import { Header } from "@entities/layout/header";
import { useSelector } from "react-redux";
import { RolesEnum, selectUser } from "@entities/user";

export const HeaderWidget = () => {
  const { role } = useSelector(selectUser)

  if (role !== RolesEnum.USER)
    return null

  return (
    <Header/>
  );
};
