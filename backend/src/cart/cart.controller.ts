import { Controller, Get, Post, Query, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { JwtUser } from "../auth/interfaces/jwt-user.interface";

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('get-items')
  @UseGuards(JwtAuthGuard)
  async getItems(
    @Req() req: Request & { user: JwtUser },
  ) {
    const user = req.user as { userId: string };
    if (!user?.userId) {
      throw new UnauthorizedException();
    }
    return await this.cartService.getCartItems(user.userId);
  }

  @Get('get-items-by-restaurant-id')
  @UseGuards(JwtAuthGuard)
  async getItemsByRestaurantId(
    @Query('restaurantId') restaurantId: string,
    @Req() req: Request & { user: JwtUser },
  ) {
    const user = req.user as { userId: string };
    if (!user?.userId) {
      throw new UnauthorizedException();
    }
    return await this.cartService.getCartItemsByRestaurantId(restaurantId, user.userId);
  }

  @Get('get-items-by-food-id')
  @UseGuards(JwtAuthGuard)
  async getItemsByFoodId(
    @Query('foodId') foodId: string,
    @Req() req: Request & { user: JwtUser },
  ) {
    const user = req.user as { userId: string };
    if (!user?.userId) {
      throw new UnauthorizedException();
    }
    return await this.cartService.getCartItemsByFoodId(foodId, user.userId);
  }

  @Post('add-item')
  @UseGuards(JwtAuthGuard)
  async addItem(
    @Query('foodId') foodId: string,
    @Req() req: Request & { user: JwtUser },
  ) {
    const user = req.user as { userId: string };
    if (!user?.userId) {
      throw new UnauthorizedException();
    }
    return await this.cartService.addFoodToCart(foodId, user.userId);
  }

  @Post('remove-item')
  @UseGuards(JwtAuthGuard)
  async removeItem(
    @Query('foodId') foodId: string,
    @Req() req: Request & { user: JwtUser },
  ) {
    const user = req.user as { userId: string };
    if (!user?.userId) {
      throw new UnauthorizedException();
    }
    return await this.cartService.removeFoodFromCart(foodId, user.userId);
  }
}
