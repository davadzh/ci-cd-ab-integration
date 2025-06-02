export type CartItemType = {
  id: string,
  foodId: string,
  cartId: string,
  food: {
    id: string,
    name: string,
    price: number,
    quantity: number,
    unit: string,
  }
}