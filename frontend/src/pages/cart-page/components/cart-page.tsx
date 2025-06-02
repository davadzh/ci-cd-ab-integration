import { RoutesEnum, withProtectedRoute } from "@entities/routing";
import { CartPageStyled } from "@pages/cart-page/styled-components/cart-page.styled.ts";

export const CartPage = withProtectedRoute(() => {
  return (
    <CartPageStyled>
      Cart page
    </CartPageStyled>
  );
}, RoutesEnum.CART);
