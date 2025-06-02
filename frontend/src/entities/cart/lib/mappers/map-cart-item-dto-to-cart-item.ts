import { CartItemType } from "@entities/cart/types/cart-item.type.ts";

export const mapCartItemDtoToCartItem = () => {
  return (cartItemDto: any): CartItemType => {
    return {
      id: cartItemDto.id,
      foodId: cartItemDto.foodId,
      cartId: cartItemDto.cartId,
      food: {
        id: cartItemDto.food.id,
        name: cartItemDto.food.name,
        price: +cartItemDto.food.price,
        quantity: cartItemDto.food.quantity,
        unit: cartItemDto.food.unit,
      }
    };
  };
}