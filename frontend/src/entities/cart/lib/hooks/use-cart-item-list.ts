import { useEffect, useState } from "react";
import { cartApi } from "@entities/cart";
import { mapCartItemDtoToCartItem } from "@entities/cart/lib/mappers/map-cart-item-dto-to-cart-item.ts";
import { CartItemType } from "@entities/cart/types/cart-item.type.ts";

export const useCartItemList = (props?: { foodId?: string, restaurantId?: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cartItemList, setCartItemList] = useState<CartItemType[]>([]);

  const getCartItemList = async () => {
    try {
      let response;
      if (props?.foodId) {
        response = await cartApi.getCartItemsByFoodId(props.foodId);
      } else if (props?.restaurantId) {
        response = await cartApi.getCartItemsByRestaurantId(props.restaurantId);
      } else {
        response = await cartApi.getCartItems();
      }

      setCartItemList(response.data.map(mapCartItemDtoToCartItem()));
    } catch (e) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void getCartItemList()
  }, []);

  return {
    isCartItemsLoading: isLoading,
    cartItemList,
  }
}