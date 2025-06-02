import { Controller, Get, UseGuards } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll() {
    return await this.restaurantService.getAll();
  }
}
