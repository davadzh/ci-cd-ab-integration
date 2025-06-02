import { RoutesEnum, withProtectedRoute } from "@entities/routing";
import { AuthPageStyled } from "@pages/auth-page/styled-components/auth-page.styled.ts";
import { AuthViaYandex } from "@features/sign-in";

export const AuthPage = withProtectedRoute(() => {

  return (
    <AuthPageStyled>
      <AuthViaYandex />
    </AuthPageStyled>
  );
}, RoutesEnum.SIGN_IN);
