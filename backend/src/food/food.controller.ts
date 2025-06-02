import { Controller, Get, UseGuards } from '@nestjs/common';
import { FoodService } from './food.service';
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getAllFood() {
    return ['food1', 'food2']
  }
}
