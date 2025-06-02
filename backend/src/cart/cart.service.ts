import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {
  }

  async getCartItems(userId: string) {
    let cart = await this.prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: { user: { connect: { id: userId } } },
      });
    }

    const cartItems = await this.prisma.cartItem.findMany({
      where: {
        cartId: cart.id,
      },
      include: {
        food: true,
      }
    });

    return cartItems;
  }

  async getCartItemsByRestaurantId(restaurantId: string, userId: string) {
    let cart = await this.prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: { user: { connect: { id: userId } } },
      });
    }

    const cartItems = await this.prisma.cartItem.findMany({
      where: {
        cartId: cart.id,
        food: {
          group: {
           restaurantId: restaurantId,
          }
        }
      },
      include: {
        food: true,
      }
    });

    return cartItems;
  }

  async getCartItemsByFoodId(foodId: string, userId: string) {
    let cart = await this.prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: { user: { connect: { id: userId } } },
      });
    }

    const cartItems = await this.prisma.cartItem.findMany({
      where: {
        cartId: cart.id,
        foodId: foodId,
      },
      include: {
        food: true,
      }
    });

    return cartItems;
  }

  async addFoodToCart(foodId: string, userId: string) {
    let cart = await this.prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: { user: { connect: { id: userId } } },
      });
    }

    const cartItem = await this.prisma.cartItem.create({
      data: {
        cart:  { connect: { id: cart.id } },
        food:  { connect: { id: foodId } },
      },
      include: {
        food: true,
      }
    });

    return cartItem;
  }

  async removeFoodFromCart(foodId: string, userId: string) {
    const item = await this.prisma.cartItem.findFirst({
      where: {
        foodId,
        cart: {
          userId: userId,
        },
      },
      include: { cart: true },
    });

    if (!item) {
      throw new ForbiddenException('CartItem not found');
    }

    const deleted = await this.prisma.cartItem.delete({
      where: { id: item.id },
    });

    return deleted;
  }
}
