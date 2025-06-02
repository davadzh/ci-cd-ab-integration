import { Controller, Get, Query } from '@nestjs/common';
import { FoodGroupService } from './food-group.service';

@Controller('food-group')
export class FoodGroupController {
  constructor(private readonly foodGroupService: FoodGroupService) {}

  @Get()
  async getByRestaurantId(@Query('restaurantId') restaurantId: string) {
    return await this.foodGroupService.getByRestaurantId(restaurantId);
  }
}
