import { AddToCartStyled } from "@features/add-to-cart/styled-components/add-to-cart.styled.ts";
import { cartApi } from "@entities/cart/api/cart-api.ts";
import { useEffect, useState } from "react";
import { useCartItemList } from "@entities/cart";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "@entities/cart/store/cart-store.ts";
import { mapCartItemDtoToCartItem } from "@entities/cart/lib/mappers/map-cart-item-dto-to-cart-item.ts";

interface AddToCartProps {
  foodId: string
}

export const AddToCart = (props: AddToCartProps) => {
  const { foodId } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);

  const {isCartItemsLoading, cartItemList} = useCartItemList({ foodId })
  const dispatch = useDispatch();

  const onAddToCart = async () => {
    try {
      setIsLoading(true)
      const {data} = await cartApi.addToCart(foodId)
      setQuantity(prev => prev + 1)
      dispatch(addCartItem(mapCartItemDtoToCartItem()(data)))
    } finally {
      setIsLoading(false)
    }
  }

  const removeFromCart = async () => {
    try {
      setIsLoading(true)
      const {data} = await cartApi.removeFromCart(foodId)
      setQuantity(prev => prev - 1)
      dispatch(removeCartItem({cartItemId: data.id}))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setQuantity(cartItemList.length)
  }, [cartItemList]);

  if (isCartItemsLoading) {
    return null
  }

  return (
    <AddToCartStyled>
      <button onClick={removeFromCart} disabled={isLoading || quantity < 1}>-</button>
      <div>{quantity}</div>
      <button onClick={onAddToCart} disabled={isLoading || quantity > 8}>+</button>
    </AddToCartStyled>
  );
};
