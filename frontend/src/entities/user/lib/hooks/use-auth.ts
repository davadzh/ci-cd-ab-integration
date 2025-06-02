import { useEffect } from "react";
import { clearUser, RolesEnum, setUser, userApi } from "@entities/user";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch()

  const validateToken = async () => {
    try {
      await userApi.validateToken()
      dispatch(setUser({
        role: RolesEnum.USER
      }))
    } catch (e) {
      dispatch(clearUser())
    }
  }

  useEffect(() => {
    void validateToken()
  }, []);
}