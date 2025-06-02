import { useCartItemList } from "@entities/cart";
import { GoToCartStyled } from "@features/go-to-cart/styled-copmonents/go-to-cart.styled.ts";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, setCartItems } from "@entities/cart/store/cart-store.ts";
import { GoToCartMiniStyled } from "@features/go-to-cart/styled-copmonents/go-to-cart-mini.styled.ts";
import { useFeatureIsOn } from "@growthbook/growthbook-react";

interface GoToCartProps {
  restaurantId: string
}

export const GoToCart = (props: GoToCartProps) => {
  const { restaurantId } = props;

  const enabled = useFeatureIsOn("cart-big-button");
  console.log(enabled)

  const { cartItemList } = useCartItemList({ restaurantId });
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  useEffect(() => {
    dispatch(setCartItems(cartItemList))
  }, [cartItemList.length]);

  const sum = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      acc = acc + item.food.price
      return acc;
    }, 0)
  }, [cartItems])

  if (cartItems.length === 0) {
    return null
  }

  if (enabled) {
    return <GoToCartStyled>
      {cartItems.length} позиций на {sum}<span>₽</span> →
    </GoToCartStyled>
  }

  return <GoToCartMiniStyled>
    →
  </GoToCartMiniStyled>
};
