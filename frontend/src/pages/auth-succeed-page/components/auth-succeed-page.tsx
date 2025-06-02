import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { findFullRoutePath, RoutesEnum, withProtectedRoute } from "@entities/routing";
import { RolesEnum, setUser, userApi } from "@entities/user";
import { useDispatch } from "react-redux";

export const AuthSucceedPage = withProtectedRoute(() => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAuthSucceed = async () => {
    try {
      const hash = window.location.hash.substring(1); // убираем #
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');

      if (!accessToken) {
        throw new Error('Access token not found');
      }

      // Теперь можно отправить accessToken на сервер
      await userApi.signIn(accessToken);

      dispatch(setUser({
        role: RolesEnum.USER
      }))
    } catch (e) {
      console.log(e)
      //TODO страница ошибки авторизации
      navigate(findFullRoutePath(RoutesEnum.SIGN_IN))
    } finally {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

  useEffect(() => {
    void handleAuthSucceed()
  }, []);

  return (
    <div/>
  );
}, RoutesEnum.AUTH_SUCCEED);
